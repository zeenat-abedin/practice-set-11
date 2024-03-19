//1. Create a Javascript class to create a complex number. Create a constructor to set the real and the complex part.

//2. Write a method to add two complex numbers in the above class

//3. Create a class student from a class Human. Override a method and see changes.

//4. See if student is an instance of Human using instanceof keyword.

//5. Use getters and setters to set and get the real and imaginary parts of the complex number

class Complex{
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary =  this.imaginary + num.imaginary
    }
}

let a = new Complex(2, 4)
let b = new Complex(1, 6)

a.add(b)
console.log(a.real, a.imaginary); 