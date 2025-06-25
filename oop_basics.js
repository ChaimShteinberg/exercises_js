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

function Animal(name){
    this.name = name;
    this.speak = function(){
        console.log(`${this.name} makes a sound`);
    }
}

function Dog(name){
    this.name = name;
    this.bark = function(){
        console.log(`${this.name} barks`);
    }
}

const myAnimal = new Animal("animal")
const myDog = new Dog("Rocky");
Object.setPrototypeOf(myDog, myAnimal)
myDog.speak();
myDog.bark();

// Exercise 5 - Vehicle & Car

function Vehicle(type){
    this.type = type;
    this.describe = function(){
        console.log(`This is a ${type}`);        
    }
}

function Car(brand){
    this.brand = brand;
    this.info = function(){
        console.log(`This is a ${this.brand} ${this.type}`);        
    }
}

const myVehicle = new Vehicle("car");
const myCar = new Car("BMW");
Object.setPrototypeOf(myCar, myVehicle);

myCar.describe();
myCar.info();