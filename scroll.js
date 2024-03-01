let listeTitres = document.querySelectorAll(".titreDefilable");

for (let i = 0; i < listeTitres.length; i++) {
    listeTitres[i].addEventListener('click', scrollToMe);
}

function scrollToMe() {
    this.scrollIntoView({behavior: "smooth"});
}

/* Onwheel */

document.addEventListener("wheel", scrollToNext, {passive: false});

let indexTitres = 0;

function scrollToNext(event) {
    event.preventDefault();

    if (event.deltaY > 0) {
        indexTitres++;
        if (indexTitres === listeTitres.length) indexTitres = 0;
    } else {
        indexTitres--;
        if (indexTitres === -1) indexTitres = listeTitres.length - 1;
    }
    listeTitres[indexTitres].scrollIntoView({behavior: "smooth"});
}
