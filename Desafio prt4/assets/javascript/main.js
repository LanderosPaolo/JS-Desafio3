let changeColor;
let firstColor = '#9acd32';
let secondColor = '#6495ed';
let thirdColor = '#ff0';
let fourthColor = '#dc143c';

document.addEventListener('keydown', function (event){
    if(event.key === 'a') {
        changeColor = document.querySelector('#first');
        changeColor.style.backgroundColor = firstColor;
    } else if(event.key === 's') {
        changeColor = document.querySelector('#second');
        changeColor.style.backgroundColor = secondColor;
    } else if(event.key === 'd') {
        changeColor = document.querySelector('#third');
        changeColor.style.backgroundColor = thirdColor;
    } else if(event.key === 'f') {
        changeColor = document.querySelector('#fourth');
        changeColor.style.backgroundColor = fourthColor;
    }
})

let color1 = document.getElementById('first').addEventListener('click', () => {
    color1 = document.getElementById('first');
    color1.style.backgroundColor = '#f00';
})

let color2 = document.getElementById('second').addEventListener('click', () => {
    color2 = document.getElementById('second');
    color2.style.backgroundColor = '#556b2f';
})

let color3 = document.getElementById('third').addEventListener('click', () => {
    color3 = document.getElementById('third');
    color3.style.backgroundColor = '#ff00ff';
})

let color4 = document.getElementById('fourth').addEventListener('click', () => {
    color4 = document.getElementById('fourth');
    color4.style.backgroundColor = '#000';
})