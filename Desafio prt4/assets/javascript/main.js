let changeColor;

document.addEventListener('keydown', function (event){
    if(event.key === 'a') {
        changeColor = 'red';
    } else if(event.key === 's') {
        changeColor = 'black';
    } else if(event.key === 'd') {
        changeColor = 'yellow';
    } else if(event.key === 'f') {
        changeColor = 'green';
    }
})

let color1 = document.getElementById('first').addEventListener('click', () => {
    color1 = document.getElementById('first');
    color1.style.backgroundColor = changeColor;
})

let color2 = document.getElementById('second').addEventListener('click', () => {
    color2 = document.getElementById('second');
    color2.style.backgroundColor = changeColor;
})

let color3 = document.getElementById('third').addEventListener('click', () => {
    color3 = document.getElementById('third');
    color3.style.backgroundColor = changeColor;
})

let color4 = document.getElementById('fourth').addEventListener('click', () => {
    color4 = document.getElementById('fourth');
    color4.style.backgroundColor = changeColor;
})