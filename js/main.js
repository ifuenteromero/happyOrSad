'use strict';

//El usuario selecciona una opción del select. Cuando pulsa el botón update la cara se pone en el título. Además se genera un número aleatorio entre 1 y 100. Si éste es par el fondo se pone amarillo y si no se pone naranja


const selectorEl = document.getElementById('mood-selector');
const btnUpdateEl = document.querySelector('.btn-update');
const pageEl = document.body;
const moodTitleEl = document.querySelector('.mood-title');
const happyEl = document.getElementById('happy');
const sadEl = document.getElementById('sad');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function even(number){
    return number%2===0
}

function changeMood(event){
    event.preventDefault();
    moodTitleEl.innerHTML=selectorEl.value;
    if (selectorEl.value===":)"){
        happyEl.play();
    }
    else{
        sadEl.play();
    }

    const randomNumber = getRandomInt(1,100);
    if (even(randomNumber)){
        pageEl.classList.remove('odd-selection');
       
    }
    else {
        pageEl.classList.add('odd-selection');
    }
   
}


btnUpdateEl.addEventListener('click',changeMood);