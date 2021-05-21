'use strict';

// DONNEES**********************************************************************

// Numéro de la slide à afficher
let slide = 0;
//Tableau de toute les images
let slides;
//boleen pour le play stop 
let play = true;
//ID du timer play stop
let timerid;

// CODE PRINCIPAL***************************************************************
document.addEventListener('DOMContentLoaded', function () {
    
    // Récupérer toutes les images html dans un tableau
    slides = document.querySelectorAll('.slider-figure');
    
    // 1. Récupérer le Bouton next
    let nextButton = document.querySelector('#next');
    // 2. ajoute au bouton next un capteur d'evenemnt 
    nextButton.addEventListener('click', onNextSlide);
    //on créer la version avec les fleches
    document.addEventListener("keydown", function(e){
    if(e.keyCode === 37){
        onPrevSlide();
    }
    else if(e.keyCode === 39){
        onNextSlide();
    }
});
    
    // 1. Récupérer le Bouton previous
    let prevButton = document.querySelector('#prev');
    // 2. ajoute au bouton previous un capteur d'evenemnt 
    prevButton.addEventListener('click', onPrevSlide);
    
    // 1. Récupérer le Bouton play-pause
    let playButton = document.querySelector('#play-pause');
    // 2. ajoute au bouton play-pause un capteur d'evenemnt 
    playButton.addEventListener('click', onPlaySlide);
    
    // 1. Récupérer le Bouton random
    let randButton = document.querySelector('#random');
    // 2. ajoute au bouton random un capteur d'evenemnt 
    randButton.addEventListener('click', onRandomSlide);
});

// FONCTIONS********************************************************************
// 3. Création de la fonction appelée lorsque qu'on clic sur le bouton Next
function onNextSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active');
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
    slide++;
    
    // Si jamais on dépasse le dernier élément du tableau on revient à 0
    if (slide > slides.length - 1) {
        slide = 0;
    }
    
    // On récupère la slide suivante
    let nextSlide = slides[slide];
    
    // Ajout de la classe active sur la slide suivante
    nextSlide.classList.add('active');
}

// 3. Création de la fonction appelée lorsque qu'on clic sur le bouton Previous
function onPrevSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active');
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide precedente)
    slide--;
    
    // Si jamais on dépasse le premier élément du tableau on revient au derbier
    if (slide < 0) {
        slide = slides.length - 1;
    }
    
    // Tableau de 8 éléments, index du dernier élément : 7
    
    // On récupère la slide suivante
    let prevSlide = slides[slide];
    
    // Ajout de la classe active sur la slide suivante
    prevSlide.classList.add('active');
}

// 3. Création de la fonction appelée lorsque qu'on clic sur le bouton Play-Pause
function onPlaySlide(){
    if (play){
        timerid = setInterval(onNextSlide, 2000);
        play = false
    }
    else {
        clearInterval(timerid);
        play = true
    }
    let icon = document.querySelector('#play-pause i');
    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-stop');
}

// 3. Création de la fonction appelée lorsque qu'on clic sur le bouton Random (la slide Random)
function onRandomSlide(){
    let randSlide;
    
    // 1. Retirer la classe active sur l'image affichée
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active');
    
    // On récupère la slide suivante
    do {
        randSlide = getRandomInteger(0, slides.length - 1);
        console.log(randSlide)
        console.log(slide)
    } while (randSlide === slide);
    
    // On l'affecte au numéro de la slide
    slide = randSlide;
    
    // Ajout de la classe active sur la slide suivante
    // On récupère la nouvelle slide
    let newSlide = slides[slide];
    
    // Ajout de la classe active sur la nouvelle slide
    newSlide.classList.add('active');
}
//Math random***********************************************************************************************
function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//on ammeliore le code en le reduisant***************************************************************
// function onNextSlide()
// {
//     // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
//     slide++;
    
//     // Si jamais on dépasse le dernier élément du tableau on revient à 0
//     if (slide > slides.length - 1) {
//         slide = 0;
//     }
//     // Appel de la fonction qui met à jour la slide
//     updateSlide();
// }

// function onPreviousSlide()
// {
//     slide--;
    
//     // Si jamais on dépasse le premier élémént du tableau on revient au dernier (taille du tableau - 1)
//     if (slide < 0) {
//         slide = slides.length - 1;
//     }
//     updateSlide();
// }

// function updateSlide()
// {
//     // 1. Retirer la classe active sur l'image affichée
//     let activeSlide = document.querySelector('.slider-figure.active');
//     activeSlide.classList.remove('active');
    
//     // On récupère la nouvelle slide
//     let newSlide = slides[slide];
    
//     // Ajout de la classe active sur la nouvelle slide
//     newSlide.classList.add('active');
// }