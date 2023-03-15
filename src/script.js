/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/

/*          <div class="slide active">
<img src="./consegna/img/01.webp" alt="roma">
</div>*/

/* 
            <img src="./img/01.webp" alt="hero-1">
            <img src="./img/01.webp" alt="hero-1">
            <img src="./img/01.webp" alt="hero-1">
            <img src="./img/01.webp" alt="hero-1">
            <img src="./img/01.webp" alt="hero-1">

            <div class="box-img">
                <img src="./img/01.webp" alt="hero-1">
            </div>
            <div class="box-img">
                <img src="./img/02.webp" alt="hero-2">
            </div>
            <div class="box-img">
                <img src="./img/03.webp" alt="hero-3">
            </div>
            <div class="box-img">
                <img src="./img/04.webp" alt="hero-4">
            </div>
            <div class="box-img">
                <img src="./img/05.webp" alt="hero-5">
            </div>
             <button class="next"><i class="fa-solid fa-chevron-circle-right"></i></button>
            <button class="prev"><i class="fa-solid fa-chevron-circle-left"></i></button>
*/


const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const slider = document.querySelector('.slider');
const thumbr = document.querySelector('.thumbr');
//console.log(slider);

let currentIndex = 0;
let slides = '';
let thumbs ='';

for (let i = 0; i < images.length; i++) {
    slides +=  `<div class="slide">
                    <img src="${images[i]}" alt="hero-${i}">
                </div>
                 `;
};
for (let i = 0; i < images.length; i++) {
    thumbs +=  `<div class="thumb box-img">
                    <img src="${images[i]}" alt="hero-${i}">
                </div>
                 `;
};



//console.log(slides);

slider.innerHTML += slides;
document.querySelectorAll('.slide')[currentIndex].classList.add('active');

thumbr.innerHTML += thumbs;
document.querySelectorAll('.thumb')[currentIndex].classList.add('active');






const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', goNext);

function goNext() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('border-white');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('opacity');

    if(currentIndex === images.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('border-white');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('opacity');
}

prev.addEventListener('click', goPrev);

function goPrev() {
    document.querySelectorAll('.slide')[currentIndex].classList.remove('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('border-white');
    document.querySelectorAll('.thumb')[currentIndex].classList.remove('opacity');
    if(currentIndex === 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex--;
    }
    document.querySelectorAll('.slide')[currentIndex].classList.add('active');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('border-white');
    document.querySelectorAll('.thumb')[currentIndex].classList.add('opacity');

}