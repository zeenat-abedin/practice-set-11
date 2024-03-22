//1. Create a Javascript class to create a complex number. Create a constructor to set the real and the complex part.

//2. Write a method to add two complex numbers in the above class

//3. Create a class student from a class Human. Override a method and see changes.

//4. See if student is an instance of Human using instanceof keyword.

//5. Use getters and setters to set and get the real and imaginary parts of the complex number

//1, 2, and 5 soln.
class Complex{
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary =  this.imaginary + num.imaginary
    }
    get real() {
      return this._real
    }
    set real(newReal) {
        this._real = newReal
    }
    get imaginary(){
       return this._imaginary    
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}

let a = new Complex(2, 4)
console.log(a.real, a.imaginary); 

a.real = 10
a.imaginary = 10
console.log(a.real, a.imaginary); 

let b = new Complex(6,2)
a.add(b)
console.log(`${a.real}+${a.imaginary}i`); 

//3. and 4. soln.
class Human{
    constructor(name, favfood) {
        this.name = name
        this.favfood = favfood
    }
    walk() {
        console.log(this.name + "Human is walking")
    }
}

class Student extends Human{
    walk() {
        console.log(this.name + " " + "Student is walking")
    }
}

let o = new Student("John", "Pizza");
o.walk()