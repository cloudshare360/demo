
const axios = required('axios');
export async function getUsers(id)
{
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    try
    {
        const getUserResponse = await axios.get(apiUrl);
        console.log("getUserResponse", getUserResponse);
        return getUserResponse?.data;
    }
    catch(error)
    {
        console.log("error while executing getUsers by id", error);

    }
}