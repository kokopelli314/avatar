// In HTML set up SVG element with id rootSvg and width/height == 200

window.onload = function() {
    let skinTone = '#b88543';
    let skin = [
        ['fill', skinTone],
        ['stroke', skinTone]
    ];

    // bottom of head
    addPath("M20 100 C 20 200, 180 200, 180 100", skin);
    // top of head
    addPath("M20 100 C 20 000, 180 000, 180 100", skin);

    // eyes
    let eye = [
        ['fill', 'white'],
        ['stroke-width', '1']
    ];
    // left eye
    addPath("M50 80 c 00 -20, 40 -20, 40 0", eye);
    addPath("M50 80 c 00 +20, 40 +20, 40 0", eye);
    let pupil = [
        ['class', 'pupil'], ['fill', 'black'], ['stroke', 'lightblue'],
        ['stroke-width', '5']
    ];
    addCircle([70, 80], 7, pupil);

    // right eye
    addPath("M130 80 c 00 -20, 40 -20, 40 0", eye);
    addPath("M130 80 c 00 +20, 40 +20, 40 0", eye);
    addCircle([150, 80], 7, pupil);


    // mouth
    addPath('M50 140 c 00 10, 30 30, 70 20');

    // draw grid
    // for (let i=0; i < 10; i++) {
    //     // vertical line
    //     addLine([i * 20, 0], [i * 20, 200]);
    //     // horizontal line
    //     addLine([0, i * 20], [200, i * 20]);
    // }
};


function addPath(points, attributes=[]) {
    let defaultAttributes = [
        ['d', points],
        ['stroke', '#666'],
        ['stroke-width', '5'],
        ['fill', 'transparent']
    ];
    addSvg('path', defaultAttributes.concat(attributes));
}

function addLine(p1, p2) {
    let attributes = [
        ['x1', p1[0]],
        ['y1', p1[1]],
        ['x2', p2[0]],
        ['y2', p2[1]],
        ['stroke', 'rgba(176, 176, 176, 0.63)'],
        ['stroke-width', '1']
    ];
    addSvg('line', attributes);
}

function addCircle(center, radius, attributes=[]) {
    let defaultAttributes = [
        ['cx', center[0]],
        ['cy', center[1]],
        ['r', radius],
        ['fill', '#444']
    ];
    addSvg('circle', defaultAttributes.concat(attributes));
}

function addSvg(type, attributes) {
    let root = document.getElementById('rootSvg');
    let child = document.createElementNS(root.namespaceURI, type);
    for (let attr of attributes) {
        child.setAttribute(attr[0], attr[1]);
    }
    root.appendChild(child);
}
