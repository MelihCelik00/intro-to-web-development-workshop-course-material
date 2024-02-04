 <h1 align="center">Selectors</h1>


# Introduction

- JS selectors are used to access elements in the Document Object Model (DOM). It is possible to call these elements in different ways. Below you can find some of the operations that can be used.

  - [document.getElementById()](#getelementbyid)
  - [document.querySelector()](#queryselector)
  - [document.querySelectorAll()](#queryselectorall)
  - [document.getElementsByClassName](#getelementsbyclassname)
  - [document.getElementsByName](#getelementsbyname)
  - [document.getElementsByTagName](#getelementsbytagname)
  - [document.children](#children)
  - [document.childNodes](#childnodes)
  - [document.firstElementChild](#firstelementchild)
  - [document.lastElementChild](#lastelementchild)
  - [document.parentNode](#parentnode)
  - [document.parentElement](#parentelement)

## getElementById

- Used to find a DOM element with an id. Returns the element itself.

```
document.getElementById('demo');
```
[Return to top](#introduction)

## querySelector

- Searches for DOM elements according to the relevant parameter and returns the first element.

```
document.querySelector('#demo')
document.querySelector('.demo')
document.querySelector('h2')
document.querySelector("div.user-panel.main input[name='login']");

<div class="user-panel main">
    <input name="login"/>
</div>
```
[Return to top](#introduction)

## querySelectorAll

- Searches for DOM elements according to the relevant parameter and returns the found elements as a `NodeList`.

```
document.querySelector('#demo')
document.querySelector('.demo')
document.querySelector('h2')
document.querySelector("div.user-panel.main input[name='login']");

<div class="user-panel main">
    <input name="login"/>
</div>
```
[Return to top](#introduction)

## getElementsByClassName

- Searches for DOM elements by CSS class and returns the found elements as an `HTMLCollection`.

```
document.getElementsByClassName('demo') // all elements that contain 'demo' class
document.getElementsByClassName('demo test') // all elemets that contains both 'demo' and 'test' classes
document.getElementsByClassName('demo')[0] // first element that contains 'demo' class
```
[Return to top](#introduction)

## getElementsByName
- Returns the objects that match the `name attribute` as a `NodeList`

```
<input type="hidden" name="demo" />
- - - - - - - - - - - - - - - - - - -
document.getElementsByName('demo'); //
```
[Return to top](#introduction)

## getElementsByTagName
- Searches for DOM elements by tag name and returns the found elements as an HTMLCollection.

```
document.getElementsByTagName("h2");
```
[Return to top](#introduction)

## children
- Returns the 1st level child elements of a DOM element as an `HTMLCollection`.

```
document.children // HTMLCollection
elem.children // HTMLCollection
```
[Return to top](#introduction)

## childNodes
- Returns the 1st level child elements of a DOM element as a `HTMLCollection`.

```
document.childNodes // NodeList
elem.childNodes // NodeList
```
[Return to top](#introduction)

## firstElementChild
- Returns the first child element of a DOM element, or null if there are no child elements.

```
document.firstElementChild
elem.firstElementChild
```
[Return to top](#introduction)

## lastElementChild
- Returns the last child element of a DOM element, or null if there are no child elements.

```
document.lastElementChild
elem.lastElementChild 
```
[Return to top](#introduction)

## parentNode
- Returns the parent element of a DOM element, or null if there is no parent element.

```
elem.parentNode
```
[Return to top](#introduction)