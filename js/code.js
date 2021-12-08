const nextBtn = document.getElementById('next');
const allBox = document.querySelectorAll('.box');
const contentBx = document.querySelector('.content')
let i = 0;


nextBtn.addEventListener('click', function(){
  i++;
  console.log(i);
  allBox[i].classList.add('zido');

})



function correctGreen(){
    document.querySelector('.item4').classList.add('correct');
}

function notCoreect(){
    document.querySelector('.item1').classList.add('wrong');
    document.querySelector('.item2').classList.add('wrong');
    document.querySelector('.item3').classList.add('wrong');
}



function yesBoos(){
    document.querySelector('.item-3').classList.add('correct');
}

function yesNoo(){
    document.querySelector('.item-1').classList.add('wrong');
    document.querySelector('.item-2').classList.add('wrong');
    document.querySelector('.item-4').classList.add('wrong');
}


function yesKoo(){
    document.querySelector('.item--4').classList.add('correct');
}

function yesMoo(){
    document.querySelector('.item--1').classList.add('wrong');
    document.querySelector('.item--2').classList.add('wrong');
    document.querySelector('.item--3').classList.add('wrong');
}