window.onload = function() {
    let svg = document.getElementById('rootSvg');
    drawAll(drawDog)
    drawAll(drawCat)
    //
    // svg.addEventListener('mouseover', (ev) => {
    //     console.log(`X: ${ev.clientX}, Y: ${ev.clientY}`)
    // });
}


function drawAll(draw) {
    let svg = document.getElementById('rootSvg');
    for (let eye of Object.keys(eyeColors)) {
        for (let skin of Object.keys(furColors)) {
            let s2 = svg.cloneNode(true);
            draw(eyeColors[eye], furColors[skin], s2);
            document.body.appendChild(s2)
        }
    }
}
