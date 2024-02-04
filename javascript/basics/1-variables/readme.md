 <h1 align="center">Variables</h1>


Variables are concepts that allow us to call and use the data types supported by Javascript in an understandable way. Variables allow us to use and process a value repeatedly.

Variables can be defined with 3 different keywords, which are;

- `let`
- `const`
- `var`

Variables are defined as follows;
```
let x = 5;
const y = 'hello';
var isThisWorking = true;
let sum = x + y // '5hello'
```

Although variable definitions can be made without using these keywords in some environments, this is not a recommended method.

The `var` keyword has been used since 1995 and `let` and `const` have been used since 2015.

<h3>Properties</h3>

- The values of variables defined with `var` and `let` can be changed, while those defined with `const` cannot be changed.

```
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
```
- Values defined with `const` must be assigned a value during definition.
const PI;

```
PI = 3.14159265359; // Incorrect
```

- Values defined with `var` are called before they are defined, they return undefined, while those defined with `let` and `const` return a reference error.

```
console.log(x);
var x = 'hello';

- output: undefined
```
```
console.log(x);
let x = 'hello';

- output: Reference Error
```
```
console.log(x);
const x = 'hello';

- output: Reference Error
```

- `var` ile tanımlanan değişkenler window objesinden erişilebilir, `let` ve `const` ile tanımlanan değişkenler erişilemez.

```
{
  const x = 2;
}
// x can NOT be used here

{
  let y = 2;
}
// y can NOT be used here

{
  var z = 2;
}
// z CAN be used here
```

```
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
```

```
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
```
- `var` ile aynı değişken ismi birden fazla tanımlanabilir, `let` ve `const` ile tanımlanamaz.

```
let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared
```

```
var x = "John Doe";

var x = 0;
```

<h3>Suggestions</h3>

  - Use `let` and `const` if the developed application is not aimed at old browsers.
  - Use `let` if the data will change, use `const` if it will not.
  - Prefer to use `const` whenever you don't have to use `let`.

