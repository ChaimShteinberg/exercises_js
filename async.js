

// Exercise 1: File Reader with Stats

const { readFile, stat } = require("fs")

const file = {}

new Promise((resolve, reject) => {
    readFile("file.txt", "utf-8", (err , data) => {
        if (err){
            console.log(err);
            reject(err)
        }
        file["File Content"] = data;
        stat("file.txt", (err , data) => {
        if (err){
            console.log(err);
            reject(err)
        }
        file["size"] = data.size;
        file["Created At"] = data.birthtimeMs;
        resolve(file)
    })})})
    .then(obj => console.log(obj))
    .catch(err => console.log(err))

// Exercise 2: Directory Files Only



// Exercise 3: Countdown Timer



// Exercise 4: Random Line from File



// Exercise 5: System Free Memory Logger