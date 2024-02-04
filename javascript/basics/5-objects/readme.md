 <h1 align="center">Objects</h1>


## Description

- `Object` data type is a data type that contains key-value pairs. They can be created with the `Object()` constructor method or with object literal notation.

```
const object1 = {};
const object2 = new Object();
const object3 = [];
const object4 = new Array();
```

- Objects are suitable for storing, transferring, and using data sets.
- The key values of objects must be `string` or `symbol`, but the values of these keys can be any data type, including functions.

```
const obj = {
  "a" : 123,
  "b" : () => {console.log('Hello world🌎')}
}

obj.a // 123
objb(); // 'Hello world🌎'
```

- Array data type is a specialized type of objects. The key values that are found as `string` or `symbol` in objects are held by the Array itself with numeric values. Therefore, it is possible to iterate and use the data stored in the Array data type.

```
const arr = ["a","b","c",1,2,3]
arr[0] // "a"
arr["1"] // "b"
```

- The Array data type, unlike objects, has a `length` property because it manages its own key values. This property allows us to find out how many data sets are stored in the array.

```
const arr = ["a","b","c",1,2,3]
arr.length // 6
arr[arr.length - 1] // 3;
```

- It is possible to iterate through objects like arrays, but since the key values are not suitable for iteration, they need to be made suitable for iteration. We can achieve this with the Object.keys() method.

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

- Arrays can hold different data types.
- The index (or position) value of the first element in an array starts at 0. Therefore, if an array has 6 elements, its length (`.length`) is 6, and the index value of its last element is 5.

## Usage

### Object Methods

- Object.defineProperty()

```
const object1 = {}

Object.defineProperty(object1, 'property1', {value: 42});
object1.property1 // 42

  or

const object1.property1 = 42
object1.property1 // 42
```

#### Object.assign()

- The Object.assign() method copies the values of all enumerable properties from one or more source objects to a target object. It returns the modified target object.

```
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);


console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true
```

#### Object.keys()

- The Object.keys method returns an array of string values that represent the keys of the object passed as a parameter.

```
console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// expected output: true
```

#### Object.values()

- The Object.values() method returns an array of the values held by the keys of the object passed as a parameter.

```
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```

### Array Methods

#### Array.prototype.filter()

- The filter() method creates a copy of the array that is processed according to the specified criteria and returns it. It does not modify the original array.

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
console.log(words);

// expected output: Array ["exuberant", "destruction", "present"]
// expected output: Array ["spray", "limit", "elite", "exuberant", "destruction", "present"]
```

#### Array.prototype.find()

- The find() method returns the first element that satisfies the provided testing function. It does not modify the original array.

```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
console.log(array1);

// expected output: 12
// expected output: [5, 12, 8, 130, 44]
```

#### Array.prototype.findIndex()

- The findIndex method returns the index (position) value of the first element that satisfies the provided testing function. If there is no element that satisfies the criteria, it returns -1. It does not modify the original array.

```
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
console.log(array1);

// expected output: 3
// expected output: [5, 12, 8, 130, 44]
```

#### Array.prototype.forEach

- The forEach() method executes the provided function for each element in the array.

```
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

#### Array.prototype.includes()

- The includes() method checks whether the given parameter exists in the array and returns a `true` or `false` value accordingly.

```
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

#### Array.prototype.pop()

- The pop() method separates the last element of the array from the array and returns the element. The method modifies the array.

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

#### Array.prototype.push()

- The push() method adds the element given as a parameter to the end of the array and modifies the array.

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```

#### Array.prototype.slice()

- The slice() method returns a new array containing the data set according to the index orders in the array based on the parameters it receives. The original array remains unchanged.

```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

#### Array.prototype.sort()

- The sort() method sorts the values in the array in ascending order and modifies the array.

```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

#### Array.prototype.unshift()

- unshift() method is used to add one or more elements to the beginning of an array. It modifies the original array.

```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```