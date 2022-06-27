// console.log('Ура! Заработало!');

let burgerMenu = document.querySelector('.burger');
let bodyMenu = document.querySelector('.menu');

if (burgerMenu){
    burgerMenu.addEventListener('click', function (e){
        burgerMenu.classList.toggle('active');
        bodyMenu.classList.toggle('active');
    });
}