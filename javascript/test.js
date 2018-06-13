eyeColors = {
    green: 'hsl(82, 83%, 52%)',
    blue: 'hsl(194, 79%, 54%)',
    grey: 'hsl(210, 8%, 95%)',
    orange: 'hsl(41, 100%, 72%)'
};

skinColors = {
    grey: 'hsl(46, 20%, 66%)',
    black: 'hsl(60, 3%, 10%)',
    orange: 'hsl(38, 77%, 64%)',
};

window.onload = function() {
    drawCat(eyeColors.blue, skinColors.black, );
}

function drawCat(eyeColor, skinColor) {
    let skin = [
        ['fill', skinColor],
        ['stroke', skinColor]
    ];

    // bottom of head
    addPath("M20 100 C 20 200, 180 200, 180 100", skin);
    // top of head
    addPath("M20 100 C 20 000, 180 000, 180 100", skin);

    // eyes
    let eye = [
        ['fill', eyeColor],
        ['stroke-width', '1']
    ];
    let pupil = [
        ['class', 'pupil'], ['fill', '#222'], ['stroke', 'none']
    ];
    // left eye
    addPath("M40 80 c 00 -30, 40 -30, 40 0", eye);
    addPath("M40 80 c 00 +30, 40 +30, 40 0", eye);
    addPath('M60, 65 c -10 10, -10 20, 0 30', pupil);
    addPath('M60, 65 c +10 10, +10 20, 0 30', pupil);
    addCircle([60, 75], 2, [['class', 'pupil-reflection'], ['fill', 'white']]);

    // right eye
    addPath("M120 80 c 00 -30, 40 -30, 40 0", eye);
    addPath("M120 80 c 00 +30, 40 +30, 40 0", eye);
    addPath('M140, 65 c -10 10, -10 20, 0 30', pupil);
    addPath('M140, 65 c +10 10, +10 20, 0 30', pupil);
    addCircle([140, 75], 2, [['class', 'pupil-reflection'], ['fill', 'white']]);


    // mouth
    addPath('M65 140 c 00 10, 30 30, 35 00');
    addPath('M100 140 c 00 10, 10 30, 35 00');

    // ears
    let ecLeft = { // ear coordinates
        outside: [25, 80],
        inside: [70, 40],
        top: [30, 2]
    };
    let ecRight = {
        outside: [200 - ecLeft.outside[0], ecLeft.outside[1]],
        inside: [200 - ecLeft.inside[0], ecLeft.inside[1]],
        top: [200 - ecLeft.top[0], ecLeft.top[1]]
    }
    addPolygon([ecLeft.outside, ecLeft.inside, ecLeft.top],
        [['fill', skinColor]]
    );
    addPolygon([ecRight.outside, ecRight.inside, ecRight.top],
        [['fill', skinColor]]
    );
    // pink inner ear
    addPolygon([
            vAdd(ecLeft.outside, [7,-30]),
            vAdd(ecLeft.inside, [-15, -5]),
            vAdd(ecLeft.top, [2, 5])
        ],
        [['fill', 'hsl(0, 36%, 60%)']]
    );
    addPolygon([
            vAdd(ecRight.outside, [-7,-30]),
            vAdd(ecRight.inside, [+15, -5]),
            vAdd(ecRight.top, [-2, 5])
        ],
        [['fill', 'hsl(0, 36%, 60%)']]
    );
    // ear hairs
    for (let i=0; i < 10; i++) {
        addLine([ecLeft.outside[0] + 7 + i*3, ecLeft.outside[1] - 25 - i*2],
                [ecLeft.outside[0] + 0 + i*3, ecLeft.outside[1] - 40 - i*2.5]);
        addLine([ecRight.outside[0] - 7 - i*3, ecRight.outside[1] - 25 - i*2],
                [ecRight.outside[0] + 0 - i*3, ecRight.outside[1] - 40 - i*2.5]);
    }

    // nose
    addPolygon([[90, 115], [110, 115], [100, 130]], [['fill', 'hsl(0, 36%, 51%)']]);
    addLine([100, 129], [100, 140], [['stroke', '#666'], ['stroke-width', '2']]);

    // whiskers
    drawWhiskers([58, 120], false);
    drawWhiskers([142, 120], true);

    // draw grid
    // for (let i=0; i < 10; i++) {
    //     // vertical line
    //     addLine([i * 20, 0], [i * 20, 200]);
    //     // horizontal line
    //     addLine([0, i * 20], [200, i * 20]);
    // }
};


function drawWhiskers(point, inverse=false) {
    let attributes = [
        ['stroke-width', '2'],
        ['stroke', inverse ? 'url(#whisker-gradient-reverse)' : 'url(#whisker-gradient)']
    ];
    let sign = inverse ? -1 : +1;
    let applySign = (p) => [p[0]*sign, p[1]];

    let c1 = [[-40, 15], [-50, -10], [-54, -10]].map(applySign);
    let c2 = [[-25, 10], [-50,   2], [-54,   3]].map(applySign);
    let c3 = [[-25, 10], [-50,   5], [-54,  10]].map(applySign);


    addPath(`M${point[0]} ${point[1]}   c ${pointsToString(c1)}`, attributes);
    addPath(`M${point[0]-3*sign} ${point[1]+5} c ${pointsToString(c2)}`, attributes);
    addPath(`M${point[0]+1*sign} ${point[1]+10} c ${pointsToString(c3)}`, attributes);
}

function pointsToString(points) {
    function pointToString(point) {
        return `${point[0]} ${point[1]}`;
    }
    return points.reduce((str, point) => {
        return str + `, ` + pointToString(point);
    }, '').substr(2);
}

function addPolygon(points, attributes=[]) {
    let defaultAttributes = [
        ['points', pointsToString(points)]
    ];

    addSvg('polygon', defaultAttributes.concat(attributes));
}

function addPath(points, attributes=[]) {
    let defaultAttributes = [
        ['d', points],
        ['stroke', '#666'],
        ['stroke-width', '3'],
        ['fill', 'transparent']
    ];
    addSvg('path', defaultAttributes.concat(attributes));
}

function addLine(p1, p2, attributes=[]) {
    let defaultAttributes = [
        ['x1', p1[0]],
        ['y1', p1[1]],
        ['x2', p2[0]],
        ['y2', p2[1]],
        ['stroke', 'rgba(176, 176, 176, 0.4)'],
        ['stroke-width', '1']
    ];
    addSvg('line', defaultAttributes.concat(attributes));
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

function addGradient() {

}

function addSvg(type, attributes) {
    let root = document.getElementById('rootSvg');
    let child = document.createElementNS(root.namespaceURI, type);
    for (let attr of attributes) {
        child.setAttribute(attr[0], attr[1]);
    }
    root.appendChild(child);
}

// add 2 vectors
function vAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
