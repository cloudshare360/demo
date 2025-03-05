const axios = require('axios'); // Ensure axios is installed

async function getUsers(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data; // Return user data
    } catch (error) {
        console.error("Error while fetching user data:", error.message || error);
        throw new Error("Failed to fetch user data");
    }
}

async function getUsersByPost(userId) {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data; // Return posts data
    } catch (error) {
        console.error("Error while fetching posts data:", error.message || error);
        throw new Error("Failed to fetch posts data");
    }
}

// Combined function
async function getUserData(userId) {
    try {
        // Fetch user and posts data in parallel
        const [user, posts] = await Promise.all([getUsers(userId), getUsersByPost(userId)]);

        // Combine user data with their posts
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: posts.map((post) => ({
                id: post.id,
                title: post.title,
            })),
        };
    } catch (error) {
        console.error("Error while fetching user data and posts:", error.message || error);
        throw error; // Re-throw error for the caller to handle
    }
}

// Example usage
getUserData(1)
    .then((data) => console.log(data))
    .catch((error) => console.error("Final Error:", error.message || error));
