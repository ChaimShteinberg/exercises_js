// Section 1:

let a = "some strung";
let b = "other string";

[a, b] = [b, a];

console.log(a, b);

// Section 2:

const metrix = [
    ["z", "x", "c", "v", "b"], 
    ["Z", "A", "Q", "X", "S"],
    ["c", "D", "e", "X", "v"],
    ["Z", "A", "Q", "X", "S"],
    ["c", "D", "e", "X", "v"]
];

let counter = 0;
for (let i = 0; i < metrix.length; i++) {
    for (let j = 0; j < metrix[i].length; j++) {
        if (metrix[i][j].toLowerCase() === "x"){
            counter++;
        }
    }    
}

console.log(counter);


// Section 3:

let family = {
    person: {}, 
    children: [
        {name: "Ali"},
        {name: "Lea"}, 
        {name: "Mona"}
    ]
};

console.log(family.children[2].name)
const {children} = family;
let childrenNames = "";
for (let i = 0; i < children.length; i++) {
    childrenNames += children[i].name + ", ";
}
console.log(childrenNames);

// Section 4:

const numArray = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < numArray.length; i++) {
    newArray.unshift(numArray[i]);
}

console.log(newArray);

// Section 5:

const typeArray = [1, "a", family, true, null, 2, "b", false, null, 3, true, , 4];
const types = {
    num: 0, 
    str: 0, 
    obj: 0,
    bool: 0, 
    nulls: 0
};

for (let i = 0; i < typeArray.length; i++) {
    
    let theType = typeof typeArray[i];

    switch (theType) {
        case "number": types.num++; break;        
        case "string": types.str++; break;   
        case "object": typeArray[i] === null? types.nulls++: types.obj++; break;
        case "boolean": types.bool++; break;  
        default: break;
    }
}

const keys = Object.keys(types);
const values = Object.values(types);

for (let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]}: ${values[i]}`);
}

// Section 6

const nums = [1, 20, 27, 112, 13, 50, 127, 86, 77, 138, 1095, 531, 613, 15];
const bigNums = [];

for (let i = 0; i < nums.length; i++){
    if (nums[i] >= 100){
        bigNums.push(nums[i]);
    }
}

console.log(bigNums);
