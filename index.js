// const bigImage = document.getElementById('big');

// const smallImages = document.getElementsByClassName('small');
// for (const smallImage of smallImages) {
//     smallImage.addEventListener('click', () => {
//         bigImage.src = smallImage.src
//     })
// }
// const listFruites = document.getElementsByTagName('li');
// for (const listFruit of listFruites) {
//     listFruit.addEventListener('click', () => {
//         listFruit.style.backgroundColor = listFruit.style.backgroundColor === 'orange' ? '' : 'orange';
//     })
// }
// const block = document.getElementById('block');
// const buttonColors = document.getElementsByClassName('button');
// for (const buttonColor of buttonColors) {
//     buttonColor.style.backgroundColor = buttonColor.textContent;
//     buttonColor.addEventListener('click', () => {
//         block.style.backgroundColor = buttonColor.textContent;
//     });
// }
// const tasks = document.getElementsByClassName('task');
// for (const task of tasks) {
//     task.addEventListener('click', () => {
//         task.style.display = 'none';
//     });
// }

// const uniq = document.getElementById('uniq');
// uniq.style.backgroundColor = 'blue';
// uniq.style.color = 'white';

// const buttons = document.getElementsByClassName('button');
// for (const element of buttons) {
//     element.style.display = 'block';
// }
// for (const button of buttons) {
//     button.addEventListener('click', () => {
//         button.style.fontSize = '32px'
//     });
// }

// const h2Block = document.querySelector('#block > h2');
// h2Block.style.backgroundColor = 'blue';
// h2Block.style.color = 'white';

// const buttonsBlock = document.querySelectorAll('#block > .button');
// buttonsBlock.forEach(element => {
//     element.style.backgroundColor = 'yellow';
// });

// for (const buttonBlock of buttonsBlock) {
//     buttonBlock.style.fontSize = '16px';
// }

// const lisBlock = document.querySelectorAll('#block > ol > li');
// for (const element of lisBlock) {
//     element.addEventListener('click', () => {
//         element.textContent = 'wow';
//     });
// }

// document.querySelector('#block > ol > li:first-child').style.backgroundColor = 'pink';
// document.querySelector('#block > ol > li:last-child').style.backgroundColor = 'pink';

// const buttons = document.querySelectorAll('button');
// for (const button of buttons) {
//     button.className = 'button';
//     button.addEventListener('mouseenter', () => {
//         button.classList.add('active');
//     })
//     button.addEventListener('mouseout', () => {
//         button.classList.remove('active');
//     })
//     button.addEventListener('click', () => {
//         button.classList.toggle('shadow');
//     })
// }

// const block1 = document.getElementById('block');
// block1.addEventListener('click', () => {
//     block1.classList.toggle('big-text');
// })

// const button = document.querySelector('#block > button');
// const picture = document.querySelector('#block > img');
// button.addEventListener('click', () => {
//     button.textContent = button.textContent === 'hide picture' ? 'show picture' : 'hide picture';
//     picture.classList.toggle('hide');
// })

const buttonTheme = document.querySelector('button:first-of-type');
buttonTheme.addEventListener('click', () => {
    buttonTheme.textContent = buttonTheme.textContent === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark');
});