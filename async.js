

// Exercise 1: File Reader with Stats

const fs = require("fs")

const file = {}

fs.readFile("file.txt", "utf-8", (err , data) => {
    if (err){
        console.log(err);
        return
    }
    file.FileContent = data
    console.log(file);
})

// Exercise 2: Directory Files Only



// Exercise 3: Countdown Timer



// Exercise 4: Random Line from File



// Exercise 5: System Free Memory Logger