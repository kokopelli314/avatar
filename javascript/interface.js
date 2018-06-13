'use strict';



document.addEventListener('DOMContentLoaded', function() {
    console.log('suuuuuuup')

    let selects = ['fur-color', 'eye-color'];
    let fur = random(Object.keys(furColors));
    let eye = random(Object.keys(eyeColors))

    for (let id of selects) {
        console.log(id);
        let s = document.getElementById(id);
        console.log(s);
        s.addEventListener('change', (ev) => {
            console.log(ev.target.value + ' ' + ev.target.id);
            if (ev.target.id == 'fur-color') fur = ev.target.value;
            if (ev.target.id == 'eye-color') eye = ev.target.value;
            draw(fur, eye);
        });
    }
    draw(fur, eye)
});


function draw(fur, eye) {
    let svg = document.getElementById('rootSvg');
    drawCat(eye, fur, svg)


}


function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
