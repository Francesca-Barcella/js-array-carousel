//alert('ciao, vai a lavorare!')

/************************************************************ 
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
************************************************************/

//MILESTONE 2:
// nascondiamo tutti il markup
// creare array con le foto
//CORREZIONE -  INSERIRE TUTTO IL PERCORSO DELL'IMMAGINE!
const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
]
console.log(slides);

let slideContainer = document.querySelector('.container_slide');
console.log(slideContainer);



for (let i = 0; i < slides.length; i++) {
    const singleSlide = slides[i];
    console.log(singleSlide);
    const slideMarkup = singleSlide;
    slideContainer.insertAdjacentHTML('beforeend', slideMarkup)
}








