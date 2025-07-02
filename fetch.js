// Exercise 1: Get User Data

const getUser = function (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => user.json())
        .then(user => console.log(`User's name: ${user.name}`))
}
// getUser(1)

// Exercise 2: Get Post Details

const getPost = function (postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(post => post.json())
        .then(post => console.log(`post title: ${post.title}`))
}
// getPost(1)

// Exercise 3: Show User's Email

function getUserEmail(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(user => user.json())
        .then(user => console.log(`User's email: ${user.email}`))
}
// getUserEmail(1)

// Exercise 4: List All Todos for a User

function listUserTodos(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(user => user.json())
        .then(user => console.log(`User ${userId} has ${user.length} todos`))
}
// listUserTodos(3)

// Exercise 5: Check if Post Exists (with .catch)

function checkPostExists(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(post => {
            if (!post.ok) throw new Error("");
            post.json()
        })
        .then(() => console.log("Post exists"))
        .catch(() => console.log("Post not found"))
}
// checkPostExists(1)
// checkPostExists(101)

// Exercise 6: Delay with Fetch

function fetchWithDelay(url, delay) {
    setTimeout(() => {
        fetch(url)
            .then(result => result.text())
            .then(text => console.log(`First 50 chars: ${text.slice(0, 50)}`))
    }, delay);
}
// fetchWithDelay("https://jsonplaceholder.typicode.com/todos", 2000)

// Exercise 7: Fetch and Show JSON Keys

function showKeys(url){
    fetch(url)
    .then(result => result.json())
    .then(json => Object.keys(json))
}
showKeys("https://jsonplaceholder.typicode.com/todos")

// Exercise 8: Fetch User, Then Their First Post



// Exercise 9: Fetch Post, Then Comments Count



// Exercise 10: Fetch Todo → Fetch User → Show Both
