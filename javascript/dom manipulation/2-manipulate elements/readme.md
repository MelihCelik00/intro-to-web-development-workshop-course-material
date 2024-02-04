 <h1 align="center">Managing Elements</h1>


## Create Elements

- We can use the following methods to create DOM elements with JavaScript:
  - document.createElement
  - document.createAttributes

### createElement

- Used to create a DOM element with JavaScript and returns the created element.
```
const divElement = document.createElement('div');
const headerElement = document.createElement('h2');
```

### createAttribute

- Used to create an `attribute` to be added to DOM elements with JavaScript.

```
const a = document.createAttribute("attribute1");
a.value = "newVal";
node.setAttributeNode(a);
```

## Styling Element

- To change the CSS properties of elements;

  - elem.classList.add('demo') // adds the demo class
  - elem.classList.remove('demo') // removes the demo class
  - elem.classList.toggle('demo') // removes the demo class if it exists, adds it if it doesn't
  - elem.classList.contains('demo') // returns `true` if the demo class exists, `false` otherwise
  - elem.style.color = 'red'
  - window.getComputedStyle(elem); // returns an object containing all the computed style properties of the element


## Add / Remove Elements

- The following methods can be used to add or remove node elements from the DOM.
  - append
  - appendChild
  - prepend
  - insertBefore
  - remove
  - removeChild
  - replaceChild
  - before
  - after
  - insertAdjacentElement
  - insertAdjacentHTML
  - insertAdjacentText
  - innerHTML
  - replaceWith
  - createDocumentFragment

### append

- The `Element.append()` method appends the given parameter(s), whether it is a `Node` or a `string` value, to the end of the element's child elements.

```
append(param1)
append(param1, param2)
append(param1, param2, /* … ,*/ paramN)

let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ <p> ]
```

### appendChild

- The `Node.appendChild()` method adds the given element as the last child of the specified element. If the element already exists in the DOM object, it will be moved to its new position.

```
elem.appendChild(elem1)
```

### prepend
- The `Element.prepend()` method adds the given parameter(s), whether it is a `Node` or a `string` value, to the beginning of the element's child elements. It does not perform HTML or XML parsing, so a string value will be added as a text node.

```
prepend(param1)
prepend(param1, param2)
prepend(param1, param2, /* … ,*/ paramN)

elem.prepend(elem1);
elem.prepend('Hello');
```

### insertBefore

- The `Node.insertBefore()` method is used to insert the element given as a parameter to the location given as a parameter.

```
elem.insertBefore(newNode, referenceNode)
```

### remove

- The `Element.remove()` method is used to remove an element from the DOM.  

```
elem.remove();
```

### removeChild

- The `Node.removeChild()` method removes the given element from the DOM and returns it.

```
const removedElem = elem.removeChild(elem2);
```

###  replaceChild
- The `Node.replaceChild()` method is used to replace one of the selected child elements under the parent element with another element. It returns the replaced element.

```
elem.replaceChild(newChild, oldChild)

```

### before

- The `Element.before()` method adds the given parameter(s), whether it is a `Node` or a `string` value, to the parent element of the element, immediately before the element.

```
before(param1)
before(param1, param2)
before(param1, param2, /* … ,*/ paramN)

let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.before(span);

console.log(container.outerHTML);
// "<div><span></span><p></p></div>"
```

### after

- The `Element.after()` method adds the given parameter(s), whether it is a `Node` or a `string` value, to the parent element of the element, immediately after the element.

```
after(node1)
after(node1, node2)
after(node1, node2, /* … ,*/ nodeN)

let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "<div><p></p><span></span></div>"
```

### insertAdjacentElement

- The `Element.insertAdjacentElement()` method is used to add the given element to the DOM with reference to the specified node element.

```
elem1.insertAdjacentElement(position, element2)
```

- The position parameter can take 4 different values;
  - `beforebegin`, before the target element
  - `afterbegin`, before the first child element of the target element
  - `beforeend`, after the last child element of the target element
  - `afterend`, after the target element

### insertAdjacentHTML

- The `Element.insertAdjacentHTML()` method adds the given text value as a `string`, as HTML or XML values to the DOM.

```
elem.insertAdjacentHTML(position, text)
```

- The position parameter can take 4 different values;
  - `beforebegin`, before the target element, if there is a parent element
  - `afterbegin`, before the first child element of the target element
  - `beforeend`, after the last child element of the target element
  - `afterend`, after the target element, if there is a parent element

### innerHTML
- The `Element.innerHTML` method returns or sets the HTML or XML notation inside the specified element.

```
const inner = elem.innerHTML
elem.innerHTML = '<div>Hello world!</div>'
```

### replaceWith

- The `Element.replaceWith()` method is used to replace the specified element with the given object or text parameter within its parent element. If there is HTML or XML notation in the text, it is added as a string (`text`).

```
replaceWith(param1)
replaceWith(param1, param2)
replaceWith(param1, param2, /* … ,*/ paramN)

p.replaceWith(span);
```


### createDocumentFragment

- Creates an empty `DocumentFragment` that can be used to add DOM nodes to the DOM tree.

```
const fragment = document.createDocumentFragment();
```
## Add / Remove Events

- We can add or remove an event to an element with Javascript.
- We can add different functions to the same event of an element without changing its existing event.
- It is possible to listen to the `event`s of the `window` object.
- Although it is possible to listen to the `event`s of DOM elements in HTML files, it is recommended to control them with Javascript.

### addEventListener

- To listen to an element's `event`, we use the `element.addEventListener` method.
```
element.addEventListener(event, function, useCapture);
```

- The first parameter of the method specifies the type of `event` to be listened to.
- The second parameter of the method specifies the function to be executed when the `event` is triggered.
- The third parameter of the method is optional but provides more control with the parameters it takes.

```
element.addEventListener("click", function(){ alert("Hello 🌍!"); });
element.addEventListener("click", (e) => {alert("Hello 🌍!");});
element.addEventListener("click", fn);
```
### removeEventListener

- To stop listening to an element's `event`, we use the `element.removeEventListener` method.

```
element.addEventListener(event, function);
element.removeEventListener("mousemove", myFunction);
```