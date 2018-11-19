'use strict'
console.log("Welcome ! ");
const point = {
    _x1 : "",
    _y1 : "",
    enter : function(x,y) {
        this._x1 = x;
        this._y1 = y;
    },
    display : function() {
        return "(" + this._x1 + "," + this._y1 + ")";
    }
}
console.log("Enter x and y coordinates of Point :");
point.enter(2,4);
console.log(point.display());

//Object.preventExtension(point);
const parent = {
    firstName : "Suryansh",
    _lastName : " ",
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
    },
    fullname() {
        return this.firstName + " " + this._lastName;
    } 
}
Object.preventExtensions(parent);
parent.lastName = "Agarwal";
console.log(parent.fullname());
console.log(Object.getOwnPropertyNames(parent));

const child = Object.create(parent);
child.middleName = " ** ";
console.log(Object.keys(child));
for ( let i in child) {
    if(Object.getOwnPropertyNames(child)){
        console.log(i);
    }
    
}