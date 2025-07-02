// Exercise 1: Get User Data

const getUser = function(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => user.json())
        .then(user => console.log(`User's name: ${user.name}`))
}
// getUser(1)

// Exercise 2: Get Post Details

const getPost = function(postId){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(post => post.json())
    .then(post => console.log(`post title: ${post.title}`))
}

// getPost(1)

// Exercise 3: Show User's Email



// Exercise 4: List All Todos for a User



// Exercise 5: Check if Post Exists (with .catch)



// Exercise 6: Delay with Fetch



// Exercise 7: Fetch and Show JSON Keys



// Exercise 8: Fetch User, Then Their First Post



// Exercise 9: Fetch Post, Then Comments Count



// Exercise 10: Fetch Todo → Fetch User → Show Both
