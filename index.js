const content = document.getElementById('content');
content.className = 'content';
const button = document.getElementById('button');
button.addEventListener('click', function () {
    alert('You make click on button.');
});
button.addEventListener('click', function () {
    content.textContent += 'qwerty!';
});
button.addEventListener('click', function () {
    button.style.width = '200px';
});
button.addEventListener('click', function () {
    button.textContent = button.textContent === 'off' ? 'on' : 'off';
    content.textContent = button.textContent === 'off' ? 'close' : 'open';
    content.style.backgroundColor = button.textContent === 'off' ? content.style.backgroundColor = 'red' : content.style.backgroundColor = 'green';
});
const small1 = document.getElementById('small1');
const small2 = document.getElementById('small2');
const small3 = document.getElementById('small3');

const big = document.getElementById('big');

small1.addEventListener('click', function () {
    big.src = small1.src;
});
small2.addEventListener('click', function () {
    big.src = small2.src;
});
small3.addEventListener('click', function () {
    big.src = small3.src;
});