const { readFile, stat, readdir } = require("fs");
const { freemem } = require("os");
const path = require("path");

// Exercise 1: File Reader with Stats

const promise1 = new Promise((resolve, reject) => {
    readFile("file.txt", "utf-8", (err , data) => {
        if (err){
            console.log(err);
            reject(err)
        }
        const file = {["File Content"]: data};
        resolve(file)
    })
})
.catch(err => console.log(err));

const promise2 = new Promise((resolve, reject) => { 
    promise1.then((file) => {
        stat("file.txt", (err , data) => {
            if (err){
                console.log(err);
                reject(err)
            }
            file["size"] = data.size;
            file["Created At"] = data.birthtime.toLocaleDateString();
            resolve(file)
        })
    })
})
.then(file => console.log(file))
.catch(err => console.log(err));

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
    } else {
        console.log("Time's up!")
    } 
}

timer();

// Exercise 4: Random Line from File

readFile("quotes.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    } 
    const lines = data.split("\r\n")
    while (true){
        const randomLine = lines[Math.floor(Math.random() * lines.length)]
        if (randomLine.length > 0){
            console.log(randomLine);
            return
        }
    }
})

// Exercise 5: System Free Memory Logger

function getFreeMem(){
    console.log(`free memory: ${freemem()} %`)
    return
}
const interval = setInterval(getFreeMem, 2000)

setTimeout(() => {
    clearInterval(interval)
    console.log("Memory logging complete.")}
, 11000)