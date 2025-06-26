// 1

const numbers1 = [1, 2, 3, 4, 5];

const doubleValues = numbers1.map(number => number * 2);

console.log(doubleValues);

// 2

const numbers2 = [10, 15, 22, 33, 40];

const onlyEvenValues = numbers2.filter(number => number % 2 === 0);

console.log(onlyEvenValues);

// 3

const mixedArray = ["first", 100, true, "middle", "last"];

const showFirstAndLast = mixedArray.filter((value, index) => {
    return index === 0 || index === mixedArray.length - 1;
})

console.log(showFirstAndLast);


// 4

const str1 = "Hello World, how are you today?";

const obj  = {};

str1.toLowerCase().split("").forEach((char) => {
    if (obj[char]){
        obj[char]++;
    } else {
        obj[char] = 1;
    }
})

console.log(obj);

// 5

const str2 = "javascript is fun";

const capitalize = [...str2].map(char => char.toUpperCase()).join("");

console.log(capitalize);


// 6

const str3 = "hello";

const shiftLetters = [...str3].map(char =>  char.charCodeAt() -1 ).map(char => String.fromCharCode(char)).join("");

console.log(shiftLetters);


// 7

const str4 = "make every word count in this sentence";

const swapCase = [...str4].map((value, index) => {
    return index % 2 === 0? value.toUpperCase(): value}).join("")

console.log(swapCase);
