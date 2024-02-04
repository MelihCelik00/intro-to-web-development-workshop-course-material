 <h1 align="center">Functions</h1>

- Javascript functions are code blocks designed to perform a specific task. Javascript functions are defined and executed by calling them.

```
function fn1 (value) {
  console.log(value);
}

fn1('Hello World'); // 'Hello World'
```

- Javascript functions can be defined in 3 different ways;

```
function fn1 () {}
const fn2 = () => {}
(() => {})()
```

- Letters, numbers, underscore, and dollar sign can be used in Javascript function names. Numbers cannot be used in the first character.
- The parameters that the function will use are written in parentheses, separated by commas.
- The operations that the function will perform are written in curly braces.

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

- The parameters used when defining functions are used as arguments in the order they are called. The values during definition and calling are different.

```
function fn1 (value) {
  console.log(value);
}

fn1('Hello World'); // 'Hello World'
```

- Function arguments (parameters provided to the function) behave like local variables inside the function.
- When the function reaches the `return` keyword, the function stops running and returns a value if specified.

```
const fn1 = () => {return 'hello'}
const fn2 = () => {return}

const a = fn1(); // a = 'hello';
const b = fn2(); // b = undefined
```

- Functions are beneficial for performing repetitive tasks and avoiding code repetition since they can be called multiple times. This leads to both time savings and improved code quality. Additionally, functions can be called with different parameters, allowing for processing with different values.
- Functions can be used like variables.

```
const myName = () => {return 'Melih Safa Çelik'};
const myAge = () => {return 28};

console.log('Hello dear guests, my name is ' + myName() + ' and my age is ' + myAge());
```

- Variables defined inside a function are local to that function and cannot be accessed from outside the function. They are created when the function runs and are deleted when it ends.

```
// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
```

- Defining variables with the same name in different functions will not cause problems due to the local nature of function variables.

```
const fn1 = () => {const a = 'hello'}
const fn2 = () => {const a = 5}
```