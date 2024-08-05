const bigImage = document.getElementById('big');

const smallImages = document.getElementsByClassName('small');
for (const smallImage of smallImages) {
    smallImage.addEventListener('click', () => {
        bigImage.src = smallImage.src
    })
}
const listFruites = document.getElementsByTagName('li');
for (const listFruit of listFruites) {
    listFruit.addEventListener('click', () => {
        listFruit.style.backgroundColor = listFruit.style.backgroundColor === 'orange' ? '' : 'orange';
    })
}
const block = document.getElementById('block');
const buttonColors = document.getElementsByClassName('button');
for (const buttonColor of buttonColors) {
    buttonColor.style.backgroundColor = buttonColor.textContent;
    buttonColor.addEventListener('click', () => {
        block.style.backgroundColor = buttonColor.textContent;
    });
}
const tasks = document.getElementsByClassName('task');
for (const task of tasks) {
    task.addEventListener('click', () => {
        task.style.display = 'none';
    });
}