const { readFile, stat, readdir } = require("fs");
const path = require("path");

// Exercise 1: File Reader with Stats

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
        })
    })
})
.then(obj => console.log(obj))
.catch(err => console.log(err))

// Exercise 2: Directory Files Only

const filesArr = {} 

readdir("../learn_js", (err, files) => {
    if (err){
        console.log(err)
        return
    }
    files.forEach((file, index) => {
        if (path.extname(file) !== ""){
            filesArr[`file${index}`] = file;
        }
    })  
    console.log(filesArr);      
})

// Exercise 3: Countdown Timer

function timer(num = 5){
    console.log(num);
    if (num > 0){
        setTimeout(() => timer(num -= 1), 1000)
    }    
}

timer();

// Exercise 4: Random Line from File



// Exercise 5: System Free Memory Logger