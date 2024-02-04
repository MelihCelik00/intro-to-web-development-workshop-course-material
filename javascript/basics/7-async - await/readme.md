 <h1 align="center">Async</h1>


## Callbacks

- `I will be called later`
- JavaScript functions work in the order they are called, not in the order they are defined.

```
function fn1() {
  console.log('Hello')
}

function fn2() {
  console.log(🌎)
}

fn2(); // output : 🌎
fn1(); // output : 'Hello'
```

- `callback function` allows passing a function as a parameter to another function and calling it within the flow.

```
function fn1(callbackFunction) {
  console.log('Hello')
  callbackFunction();
}

function fn2() {
  console.log(🌎)
}

fn1(fn2); // output :
  'Hello'
  🌎
```

- When using a function as a `callback function`, parentheses are not used.

```
fn1(fn2); // True
fn1(fn2()) // False
```

## Asynchronous

- `Will be completed later`
- Asynchronous functions can work in parallel with other functions. Thus, while the application continues to interact, we can perform the tasks we assign in the background.
- One of the most common asynchronous functions is the setTimeout function. The setTimeout function takes a `callback function` and a time parameter, and calls the function when the time is up.

```
function fn1 () {console.log('hello 🌎')};
function fn2 () {console.log('hello jfk')};

setTimeout(fn1, 3000);
fn2();

output :
  'hello jfk'
  'hello 🌎' // 3 seconds later

```

- Asynchronous functions are especially useful when retrieving data from a database, waiting for a response from the database and server. Since we do not know when the data will arrive, we can allow the function that requests the data to continue running in the background while continuing to use the application.

## Promises

- `I have a promise`
- Since compiling code or fetching data can take time, functions that will consume them must wait. Promises act as triggers that will run the code when the waiting is over.

```
let myPromise = new Promise(function(myResolve, myReject) {
  // Will take time

  myResolve(); // If successful
  myReject();  // If unsuccessful
});

// Will be consumed
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

- `promises` always calls either the resolve function or the reject function when the expected part is completed.
- `promises` can be in 3 different states;
  - `'pending'` // output: undefined
  - `'fulfilled'` // output: result value
  - `'rejected'` // output: error object
- `'pending'` is the state when the function is waiting for the operation to complete.
- `'fulfilled'` is the state when no error is encountered and a result value is produced.
- `'rejected'` is the state when an error is encountered and the intended operation is not completed successfully.

```
function myDisplayer(value) {
  console.log(value)
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// Code block will take time

  if (x == 0) {
    myResolve('hello 🌎');
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

output // 'hello 🌎'
```

## Async/Await

- `async` enables a function to return a `promise`.
- `await` enables a function to listen to a `promise`.

```
async function fn1() {
  return 'hello 🌎';
}

function fn1() {
  return Promise.resolve('hello 🌎');
}

// Yukarıdaki iki fonksiyon aynıdır.
```

- The `await` keyword only works inside `async` functions.
- The `await` keyword pauses execution until the function is resolved and then continues.

```
<!DOCTYPE html>
<html>
<head>
	<title>Async/Await Example</title>
</head>
<body>
	<div id="demo"></div>

	<script>
		async function fn1() {
			let myPromise = new Promise(function(resolve) {
				setTimeout(function() {resolve("I love you!");}, 3000);
			});

			document.getElementById("demo").innerHTML = await myPromise;
		}

		fn1();
	</script>
</body>
</html>
```
