 <h1 align="center">Data Types</h1>

<h3>Data Types</h3>

- Primitive Types
  - `undefined`
  - `null`
  - `boolean`
  - `number`
  - `bigint`
  - `string`
  - `symbol`
- Object Types
  - `Obje`
  - `Array`
  - `Fonksiyon`

<h3>Primitive Types</h3>

- `undefined` is used to represent variables that have no data type.
```
let x; // x = undefined
```

- `null` is a data type that represents a conscious absence of any value.

```
let x = null // x = null
```

- `boolean` data type is a data type that represents true (`true`) and false (`false`) values in computer science.

```
let x = true;
let y = false
Boolean(1) // true
```

- `number` data type is a data type that represents any kind of number except very large numbers.

```
let x = 5;
let y = -5;
let z = 5.1;
```

- `bigint` data type is used for situations where the memory space occupied by the number data type is not sufficient and may cause errors.

```
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

- `string` data type is a data type that holds data expressed in text (UTF-16 code units).

```
let x = 'hello';
let y = 🌎
```

- `symbol` data type are unique and immutable values. They can be used as key values for objects.
<h3>Object Types</h3>

- `object` data type is a non-primitive data type that acts as a container for other data types. `object` consists of key-value pairs.

```
const car = {type:"Fiat", model:"500", color:"white"};
typeof car // 'object'
```

- `array` data type is one of the special cases of the `object` data type at its core. It has sequential numbers in place of keys found in the normal `object` type.

```
const numbers = [0,1,2,3,4,5,6,7,8,9]
typeof numbers // 'object'
```

- `function` data type are callable objects. In Javascript, everything that is not a primitive data type is actually an object. However, as objects differentiate and gain other properties, the number of these distinctions increases.

```
const fn1 = () => {}
typeof fn1 // 'function'
```