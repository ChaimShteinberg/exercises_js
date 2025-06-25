// Exercise 1 - Phone

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.details = function(){
        console.log(`Phone: ${this.brand} ${this.model}`);        
    }
}

const myPhone = new Phone("QLYX", "D9");
myPhone.details();

// Exercise 2 - Rectangle

function Rectangle(width, height){
    this.width = width;
    this.height = height;
    this.area = function(){
        return width * height;
    }
}

const myRectangle = new Rectangle(5, 4);
console.log(myRectangle.area());

// EXercise 3 - BankAccount

function BankAccount(owner, balance){
    this.owner = owner;
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdraw = function(amount){
        this.balance -= amount;
    }
    this.checkBalance = function(){
        console.log(`Balance: ${this.balance}`);
        
    }
}

const myBankAccount = new BankAccount("Chaim", 1000);
myBankAccount.deposit(500);
myBankAccount.withdraw(200);
myBankAccount.checkBalance();

// Exercise 4 - Animal & Dog

class Animal{
    constructor(name){
        this.name = name;
        this.speak = function(){
            console.log(`${this.name} makes a sound`);            
        }
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
        this.bark = function(){
            console.log(`${this.name} barks`);            
        }
    }
}

const myDog = new Dog("Rocky");
myDog.speak();
myDog.bark();