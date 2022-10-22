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

//CORREZIONE - prendo gli elementi dal dom che mi serviranno per l'esercizio
const slideContainer = document.querySelector('.slides');
const btnPrec = document.querySelector('.precedente');
const btnSucc = document.querySelector('.successiva');
console.log(slideContainer);
console.log(btnPrec);
console.log(btnSucc);


//CORREZIONE - decido l'indice dell'immagine attiva da cui partire (let perchè poi cambierà)
let activeImg = 0;

for (let i = 0; i < slides.length; i++) {
    const slideSrc = slides[i];
    console.log(slideSrc);
    //CORREZIONE - inserisco il path dell'immagine tramite TERNARY OPERATOR - 
    // condition ? <expression if true> : <expression if false>
    const slideMarkup = `<img class="img-fluid ${i === activeImg ? 'active' : ''}" src="${slideSrc}" alt= "">`;
    slideContainer.insertAdjacentHTML('beforeend', slideMarkup);
}


//MILESTONE 3: Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// attivo eventlistener su SUCCESSIVA
// seleziono l'immagine attiva
// gli tolgo la classe active
// assegno l'incremento ++ al valore di activeImg (la let di prima =0) che ad ogni click poi aumenterà di 1 l'ndice della foto da "pescare" dall'array
// creo una variabile per prendere tutte le immagini dal ciclo for tramite getElement BYCLASSNAME
// creo una variabile per l'immagine successiva
// assegno il valore active a questa immagine

//STRUTTURA EVENTLISTENER
/* nomevariabile.addEventListener('click', function(){
tutto il codice delle oeprazioni
}); */


btnSucc.addEventListener('click', function () {
    console.log('hai cliccato su successiva');

    const activeSlideEl = document.querySelector('.slides > img.active');
    console.log(activeSlideEl);

    activeSlideEl.classList.remove('active');

    activeImg++;
    console.log(activeImg);

    const allSlides = document.getElementsByClassName('img-fluid');
    console.log(allSlides);
    console.log(allSlides[activeImg]);

    const slideSucc = allSlides[activeImg];

    slideSucc.classList.add('active');
    
})


// attivo eventlistener su PRECEDENTE
// dovrebbe essere tutto uguale ma l'incremento delle img è un DECREMENTO --.

btnPrec.addEventListener('click', function () {
    console.log('hai cliccato su successiva');

    const activeSlideEl = document.querySelector('.slides > img.active');
    console.log(activeSlideEl);

    activeSlideEl.classList.remove('active');

    activeImg--;
    console.log(activeImg);

    const allSlides = document.getElementsByClassName('img-fluid');
    console.log(allSlides);
    console.log(allSlides[activeImg]);

    const slideSucc = allSlides[activeImg];

    slideSucc.classList.add('active');
    
})





