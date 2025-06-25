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

