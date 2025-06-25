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

// Exercise 6 - Shape Polymorphism

function Shape(){
    this.area = function(){
        return 0;
    }
}

function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius ** 2;
    }
}

function Square(side){
    this.side = side;
    this.area = function(){
        return this.side ** 2;
    }
}

const myShape = new Shape;
const myCircle = new Circle(3);
const mySquare = new Square(4);

Object.setPrototypeOf(myCircle, myShape);
Object.setPrototypeOf(mySquare, myShape);

console.log(myCircle.area());
console.log(mySquare.area());

// Exercise 7 - Book

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    info(){
        console.log(`${this.title} by ${this.author}`);        
    }
}

const myBook = new Book("The Hobbit", "Tolkien");
myBook.info();

// Exercise 8 - Person & Student

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`);        
    }
}

class Student extends Person{
    constructor(name, school){
        super(name);
        this.school = school;
    }
    study(){
        console.log(`${this.name} is studying at ${this.school}`);        
    }
}

const newStudent = new Student("Alice", "Oxford");
newStudent.greet();
newStudent.study();

// Exercise 9 - Employee & Manager (Polymorphism + Private Fields)

class Employee{
    #salary
    constructor(salary){
        this.#salary = salary;
    }
    getSalary(){
        return this.#salary;
    }
    work(){
        console.log("Employee is working");
        
    }
}

class Manager extends Employee{
    work(){
        console.log("Manager is managing");
        
    }
}

const newEmployee = new Employee(4000);
console.log(newEmployee.getSalary());
newEmployee.work();
const newManager = new Manager(5000);
console.log(newManager.getSalary());
newManager.work();