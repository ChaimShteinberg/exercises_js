const { readFile}  = require("fs");

// 1. Read File with Promise

function readFilePromise(path){
    return new Promise((resolve, reject) => {
        readFile(path, "utf-8", (err, data) => {
            if (err) throw new Error("");
            resolve(data)
        })
    })
}

readFilePromise("file.txt").then(console.log)

// 2. Async Read File



// 3. Get File Size



// 4. List Files in Directory



// 5. Read Multiple Files in Order



// 6. Read Files in Parallel



// 7. Check If File Exists with Promise



// 8. Copy File with Promises



// 9. Merge Text Files



// 10. Search Word in All Files
