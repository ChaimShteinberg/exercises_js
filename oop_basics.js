// Exercise 1 - Phone

function Phone(brand, model) {
    this.brand = brand;
    this.model = model;
    this.datails = function(){
        console.log(`Phone: ${this.brand} ${this.model}`);        
    }
}