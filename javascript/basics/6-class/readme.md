 <h1 align="center">Class</h1>

# Description

- Classes are templates used to create new objects.
- The `class` keyword is used to define a class.

```
class Rectangle {
  constructor() {
  }
}
```

- Class definitions are functions and they can be called.

```
class Rectangle {}
console.log(typeof Rectangle) // function
```

- When the class definition is called, the constructor method is activated and returns the object it produces.

```
class Rectangle {}
const rectangle = new Rectangle()
console.log(typeof rectangle) // object
```

- When a class is defined, if the constructor method is not written, JavaScript uses an empty constructor method.
- When a class is instantiated as an object, the `new` keyword must be used.

```
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

- The parameters given to classes are bound to the internal state of the class object realized with the constructor method.

```
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  let myCar = new Car("Ford", 2014);
  myCar.name // Ford
```

- It is possible to read or manage the internal state of a class with the methods added to the classes.

```
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
myCar.age // 8
```
