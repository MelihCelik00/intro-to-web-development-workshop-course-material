const idSelected = document.getElementById('id-selected');
const classSelected = document.getElementsByClassName('class-selected');
const querySelectedDiv = document.querySelector('div');
const querySelectedH1 = document.querySelector('h1');
const querySelectorAllDiv = document.querySelectorAll('div');
const nameSelected = document.getElementsByName('name-selected');
const tagSelected = document.getElementsByTagName('h1');
const ulTagSelected = document.getElementsByTagName('ul');
const ulChildrenSelected = [...ulTagSelected][0].children;
const firstElementChildSelected = [...ulTagSelected][0].firstElementChild;
const lastElementChildSelected = [...ulTagSelected][0].lastElementChild;
const firstLiElementSelected = document.querySelector('li');
const parentNodeSelected = firstLiElementSelected.parentNode;
const parentElementSelected = firstLiElementSelected.parentElement;

const idSelectedButton = document.getElementById('id-selected-button');

const classSelectedButton = document.getElementById('class-selected-button');
const querySelectedDivButton = document.getElementById('query-selected-button');
const querySelectedH1Button = document.getElementById('query-selected-h1');
const querySelectedAllDivButton = document.getElementById('query-selected-all');
const nameSelectedButton = document.getElementById('name-selected-button');
const tagSelectedButton = document.getElementById('tag-selected-button');
const childrenSelectedButton = document.getElementById('children-selected-button');
const firstElementChildSelectedButton = document.getElementById('first-element-child-selected');
const lastElementChildSelectedButton = document.getElementById('last-element-child-selected');
const firstLiElementSelectedButton = document.getElementById('first-li-element-selected');
const parentNodeSelectedButton = document.getElementById('parent-node-selected');
const parentElementSelectedButton = document.getElementById('parent-element-selected');

idSelectedButton.addEventListener('click', (e) => {
	idSelected.classList.toggle('flash');
});
classSelectedButton.addEventListener('click', (e) => {
	[...classSelected][0].classList.toggle('flash');
});
querySelectedDivButton.addEventListener('click', (e) => {
	querySelectedDiv.classList.toggle('flash');
});
querySelectedH1Button.addEventListener('click', (e) => {
	querySelectedH1.classList.toggle('flash');
});
querySelectedAllDivButton.addEventListener('click', (e) => {
	const elements = [...querySelectorAllDiv]
  elements.forEach(element => {
    element.classList.toggle('flash');
  })
});
nameSelectedButton.addEventListener('click', (e) => {
	[...nameSelected][0].classList.toggle('flash');
});
tagSelectedButton.addEventListener('click', (e) => {
	[...tagSelected][0].classList.toggle('flash');
});
childrenSelectedButton.addEventListener('click', (e) => {
  const elements = [...ulChildrenSelected]
  elements.forEach(element => {
    element.classList.toggle('flash');
  })

});

firstElementChildSelectedButton.addEventListener('click', (e) => {
	firstElementChildSelected.classList.toggle('flash');
});
lastElementChildSelectedButton.addEventListener('click', (e) => {
	lastElementChildSelected.classList.toggle('flash');
});
parentNodeSelectedButton.addEventListener('click', (e) => {
	parentNodeSelected.classList.toggle('flash');
});
parentElementSelectedButton.addEventListener('click', (e) => {
	parentElementSelected.classList.toggle('flash');
});
