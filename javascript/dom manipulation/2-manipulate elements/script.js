const createBlockWithRandomColor = () => {
	const block = document.createElement('div');
	block.classList.add('block');
	block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
		Math.random() * 255
	)},${Math.floor(Math.random() * 255)})`;

	return block;
};

const createTargetBlock = () => {
	const targetBlock = createBlockWithRandomColor();
	targetBlock.id = 'target-block';
	targetBlock.innerText = 'Target Block';
	return targetBlock;
};

const checkIfTargetBlockExist = () => {
	const targetBlock = document.getElementById('target-block');

	targetBlock ? '' : createTargetBlock();
};

const section1 = document.getElementById('create-elements-section');
section1.append(createTargetBlock());

const s1AppendButton = document.getElementById('s1-append-button');
const s1AppendChildButton = document.getElementById('s1-append-child-button');
const s1PrependButton = document.getElementById('s1-prepend-button');
// const s1InsertBeforeButton = document.getElementById('s1-insert-before-button');
const s1RemoveButton = document.getElementById('s1-remove-button');
const s1RemoveChildButton = document.getElementById('s1-remove-child-button');
const s1ReplaceChildButton = document.getElementById('s1-replace-child-button');
const s1BeforeButton = document.getElementById('s1-before-button');
const s1AfterButton = document.getElementById('s1-after-button');
const s1InnerHTMLButton = document.getElementById('s1-inner-html-button');
const s1ReplaceWithButton = document.getElementById('s1-replace-with-button');

const s2Append = document.getElementById('s2-append');
const s2AppendChild = document.getElementById('s2-append-child');
const s2AppendFragment = document.getElementById('s2-append-fragment');
const s2AppendChildFragment = document.getElementById('s2-append-child-fragment');
const resetButton = document.getElementById('reset-button');

const elemLimit = 10000;
let fontSizeState = 1;
let colorState = 1;

s1AppendButton.addEventListener('click', (e) => {
	const block = createBlockWithRandomColor();
	block.innerText = 'Append';
	section1.append(block);
});
s1AppendChildButton.addEventListener('click', (e) => {
	const block = createBlockWithRandomColor();
	block.innerText = 'Append Child';
	section1.appendChild(block);
});

s1PrependButton.addEventListener('click', (e) => {
	const block = createBlockWithRandomColor();
	block.innerText = 'Prepend';
	section1.prepend(block);
});
// s1InsertBeforeButton.addEventListener('click', (e) => {
// 	const block = createBlockWithRandomColor();
// 	block.innerText = 'Insert Before';
// 	block.insertBefore(block, targetBlock);
// });
s1RemoveButton.addEventListener('click', (e) => {
	const targetBlock = document.getElementById('target-block');
	targetBlock.remove();
});
s1RemoveChildButton.addEventListener('click', (e) => {
	const targetBlock = document.getElementById('target-block');
	section1.removeChild(targetBlock);
});

s1BeforeButton.addEventListener('click', (e) => {
	const targetBlock = document.getElementById('target-block');
	const block = createBlockWithRandomColor();
	block.innerText = 'Before';
	targetBlock.before(block);
});

s1AfterButton.addEventListener('click', (e) => {
	const targetBlock = document.getElementById('target-block');
	const block = createBlockWithRandomColor();
	block.innerText = 'After';
	targetBlock.after(block);
});

s1InnerHTMLButton.addEventListener('click', (e) => {
	section1.innerHTML =
		'<div class="block" id="target-block" style="background-color: rgb(160, 5, 76);">Target Block</div>';
});

s2Append.addEventListener('click', (e) => {
	console.time('append start');
	for (let i = 0; i < elemLimit; i++) {
		const div = createBlockWithRandomColor();
		section1.append(div);
	}
	console.timeEnd('append start');
});

s2AppendChild.addEventListener('click', (e) => {
	console.time('append child start');
	for (let i = 0; i < elemLimit; i++) {
		const div = createBlockWithRandomColor();
		section1.appendChild(div);
	}
	console.timeEnd('append child start');
});

s2AppendFragment.addEventListener('click', (e) => {
	console.time('append fragment start');
	const fragment = new DocumentFragment();
	for (let i = 0; i < elemLimit; i++) {
		const div = createBlockWithRandomColor();
		fragment.append(div);
	}
	section1.append(fragment);
	console.timeEnd('append fragment start');
});

s2AppendChildFragment.addEventListener('click', (e) => {
	console.time('append child fragment start');
	const fragment = new DocumentFragment();
	for (let i = 0; i < elemLimit; i++) {
		const div = createBlockWithRandomColor();
		fragment.appendChild(div);
	}
	section1.append(fragment);
	console.timeEnd('append child fragment start');
});

resetButton.addEventListener('click', (e) => {
	section1.innerHTML = '';
});

const s3ClassListAdd = document.getElementById('s3-classlist-add');
const s3ClassListRemove = document.getElementById('s3-classlist-remove');
const s3ClassListToggle = document.getElementById('s3-classlist-toggle');
const s3ClassListContains = document.getElementById('s3-classlist-contains');
const s3changeStyleColor = document.getElementById('s3-change-style-color');
const s3changeStyleFontSize = document.getElementById('s3-change-style-font-size');
const s3GetComputedStyle = document.getElementById('s3-get-computed-style');

const styleTarget = document.getElementById('style-target');

s3ClassListAdd.addEventListener('click', (e) => {
	styleTarget.classList.add('demo-class');
});

s3ClassListRemove.addEventListener('click', (e) => {
	styleTarget.classList.remove('demo-class');
});
s3ClassListToggle.addEventListener('click', (e) => {
	styleTarget.classList.toggle('demo-class');
});
s3ClassListContains.addEventListener('click', (e) => {
	const contains = styleTarget.classList.contains('demo-class');
	window.alert(contains);
});
s3changeStyleColor.addEventListener('click', (e) => {
	switch (colorState) {
		case 1:
			colorState = 2;
			styleTarget.style.color = 'red';
			break;

		case 2:
			styleTarget.style.color = 'black';
			colorState = 3;
			break;

		case 3:
			styleTarget.style.color = 'aqua';
			colorState = 1;
			break;

		default:
			colorState = 1;
			break;
	}
});
s3changeStyleFontSize.addEventListener('click', (e) => {
	switch (fontSizeState) {
		case 1:
			styleTarget.style.fontSize = '16px';
			fontSizeState = 2;
			break;

		case 2:
			styleTarget.style.fontSize = '20px';
			fontSizeState = 3;
			break;

		case 3:
			styleTarget.style.fontSize = '24px';
			fontSizeState = 1;
			break;

		default:
			fontSizeState = 1;
			break;
	}
});

s3GetComputedStyle.addEventListener('click', (e) => {
	const computedStyle = window.getComputedStyle(styleTarget);
	console.log(computedStyle);
	window.alert(
		`position left : ${computedStyle.left}
		color : ${computedStyle.color}
		font size : ${computedStyle.fontSize}
		background color : ${computedStyle.backgroundColor}
	`
	);
});
