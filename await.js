import fs from "fs";

// 1. Read File with Promise

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) throw new Error("");
            resolve(data);
        })
    })
}

// readFilePromise("file.txt").then(console.log);

// 2. Async Read File

async function readFileAsync(path) {
    return fs.promises.readFile(path, "utf-8");
}

// readFileAsync("file.txt").then(console.log);

// 3. Get File Size

async function getFileSize(path) {
    return (await fs.promises.stat(path)).size
}

// getFileSize("file.txt").then(console.log)

// 4. List Files in Directory

async function listFiles(dir){
    return fs.promises.readdir(dir)
}

// listFiles("./").then(console.log)

// 5. Read Multiple Files in Order

async function readFilesInOrder(files){
    files.forEach(file => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err){
                return err
            }
            console.log(data)
        })
    });
}

readFilesInOrder(["file.txt", "quotes.txt"]);

// 6. Read Files in Parallel



// 7. Check If File Exists with Promise



// 8. Copy File with Promises



// 9. Merge Text Files



// 10. Search Word in All Files
