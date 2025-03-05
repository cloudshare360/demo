# demo

Implement an async function in Node.js that fetches user data from two APIs in parallel and merges the results.
API Endpoints:
https://jsonplaceholder.typicode.com/users/:id → Returns user details.
https://jsonplaceholder.typicode.com/posts?userId=:id → Returns posts by the user.
Requirements:
Fetch both APIs in parallel.
Merge the user data with their posts.
Handle errors properly.
 
Example Output for getUserData(1):
{

  "id": 1,

  "name": "Leanne Graham",

  "email": "Sincere@april.biz",

  "posts": [

    { "id": 1, "title": "sunt aut facere repellat provident occaecati..." },

    { "id": 2, "title": "qui est esse" }

  ]

}

 