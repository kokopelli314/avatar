eyeColors = {
    brown: 'hsl(38, 87%, 30%)',
    green: 'hsl(82, 83%, 52%)',
    blue: 'hsl(194, 79%, 54%)',
    grey: 'hsl(210, 8%, 95%)',
    yellow: 'hsl(61, 100%, 70%)'
};

furColors = {
    grey: 'hsl(46, 20%, 66%)',
    black: 'hsl(60, 3%, 10%)',
    orange: 'hsl(38, 77%, 64%)',
};


earTypes = {
    droopy: (svg, attributes) => {
        addPath(svg, 'M60 38 c 5 20, -40 30, -40 70 s -50 -80, 40 -70', attributes);
        addPath(svg, 'M140 38 c -5 20, +40 30, +40 70 s +50 -80, -40 -70', attributes);
    },
    pointy: (svg, attributes) => {
        let att = attributes.concat(['stroke', 'transparent'])
        addPath(svg, 'M70 45 c -5 -10, -10 -15, -25 -35 s -10 15, -20 55 S 30 50, 70 45', att);
    }
}





function drawDog(eyeColor, skinColor, svgElement) {
    let s = svgElement;
    let skin = [
        ['fill', skinColor],
        ['stroke', skinColor]
    ];

    // bottom of head
    addPath(s, "M20 100 C 40 200, 160 200, 180 100", skin);
    // top of head
    addPath(s, "M20 100 C 20 20, 180 20, 180 100", skin);

    // eyes
    let eye = [
        ['fill', eyeColor],
        ['stroke-width', '1']
    ];
    let pupil = [
        ['class', 'pupil-dog'], ['fill', '#222'], ['stroke', 'none']
    ];
    // left eye
    addPath(s, "M40 85 c 00 -20, 40 -30, 40 0", eye);
    addPath(s, "M40 85 c 00 +20, 40 +20, 40 0", eye);
    addCircle(s, [60, 80], 10, pupil);
    addCircle(s, [62, 77], 2, [['class', 'pupil-reflection-dog'], ['fill', 'white']]);

    // right eye
    addPath(s, "M120 85 c 00 -30, 40 -20, 40 0", eye);
    addPath(s, "M120 85 c 00 +20, 40 +20, 40 0", eye);
    addCircle(s, [140, 80], 10, pupil);
    addCircle(s, [142, 77], 2, [['class', 'pupil-reflection-dog'], ['fill', 'white']]);


    // mouth
    addPath(s, 'M65 140 c 00 10, 30 15, 35 00');
    addPath(s, 'M100 140 c 00 10, 30 15, 35 00');

    // ears
    let ear = [
        ['fill', skinColor],
        ['stroke-width', '1']
    ];
    earTypes.droopy(s, ear);

    // nose
    addPolygon(s, [[85, 115], [115, 115], [100, 130]], [['fill', 'hsl(0, 36%, 51%)']]);

    // whiskers
    addCircle(s, [55, 122], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);
    addCircle(s, [50, 127], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);
    addCircle(s, [48, 120], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);

    addCircle(s, [145, 122], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);
    addCircle(s, [150, 127], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);
    addCircle(s, [152, 120], 1, [['fill', 'hsla(0, 0%, 50%, 0.7)']]);
};


function drawCat(eyeColor, skinColor, svgElement) {
    let s = svgElement;
    let skin = [
        ['fill', skinColor],
        ['stroke', skinColor]
    ];

    // bottom of head
    addPath(s, "M20 100 C 20 200, 180 200, 180 100", skin);
    // top of head
    addPath(s, "M20 100 C 20 000, 180 000, 180 100", skin);

    // eyes
    let eye = [
        ['fill', eyeColor],
        ['stroke-width', '1']
    ];
    let pupil = [
        ['class', 'pupil-cat'], ['fill', '#222'], ['stroke', 'none']
    ];
    let pupilReflection = [
        ['class', 'pupil-reflection-cat'], ['fill', 'white']
    ];
    // left eye
    addPath(s, "M40 80 c 00 -30, 40 -30, 40 0", eye);
    addPath(s, "M40 80 c 00 +30, 40 +30, 40 0", eye);
    addPath(s, 'M60, 65 c -10 10, -10 20, 0 30', pupil);
    addPath(s, 'M60, 65 c +10 10, +10 20, 0 30', pupil);
    addCircle(s, [60, 75], 2, pupilReflection);

    // right eye
    addPath(s, "M120 80 c 00 -30, 40 -30, 40 0", eye);
    addPath(s, "M120 80 c 00 +30, 40 +30, 40 0", eye);
    addPath(s, 'M140, 65 c -10 10, -10 20, 0 30', pupil);
    addPath(s, 'M140, 65 c +10 10, +10 20, 0 30', pupil);
    addCircle(s, [140, 75], 2, pupilReflection);


    // mouth
    addPath(s, 'M65 140 c 00 10, 30 30, 35 00');
    addPath(s, 'M100 140 c 00 10, 10 30, 35 00');

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
    addPolygon(s, [ecLeft.outside, ecLeft.inside, ecLeft.top],
        [['fill', skinColor], ['stroke-linejoin', 'round']]
    );
    addPolygon(s, [ecRight.outside, ecRight.inside, ecRight.top],
        [['fill', skinColor], ['stroke-linejoin', 'round']]
    );
    // pink inner ear
    addPolygon(s, [
            vAdd(ecLeft.outside, [7,-30]),
            vAdd(ecLeft.inside, [-15, -5]),
            vAdd(ecLeft.top, [2, 5])
        ],
        [['fill', 'hsl(0, 36%, 60%)']]
    );
    addPolygon(s, [
            vAdd(ecRight.outside, [-7,-30]),
            vAdd(ecRight.inside, [+15, -5]),
            vAdd(ecRight.top, [-2, 5])
        ],
        [['fill', 'hsl(0, 36%, 60%)']]
    );
    // ear hairs
    let earHair = [['stroke', skinColor]];
    for (let i=0; i < 10; i++) {
        addLine(s, [ecLeft.outside[0] + 7 + i*3, ecLeft.outside[1] - 25 - i*2],
                [ecLeft.outside[0] + 0 + i*3, ecLeft.outside[1] - 40 - i*2.5],
                earHair);
        addLine(s, [ecRight.outside[0] - 7 - i*3, ecRight.outside[1] - 25 - i*2],
                [ecRight.outside[0] + 0 - i*3, ecRight.outside[1] - 40 - i*2.5],
                earHair);
    }

    // nose
    addPolygon(s, [[90, 115], [110, 115], [100, 130]], [['fill', 'hsl(0, 36%, 51%)']]);
    addLine(s, [100, 129], [100, 140], [['stroke', '#666'], ['stroke-width', '2']]);

    // whiskers
    drawWhiskers(s, [58, 120], false);
    drawWhiskers(s, [142, 120], true);

    // draw grid
    // for (let i=0; i < 10; i++) {
    //     // vertical line
    //     addLine(s, [i * 20, 0], [i * 20, 200]);
    //     // horizontal line
    //     addLine(s, [0, i * 20], [200, i * 20]);
    // }
};


function drawWhiskers(s, point, inverse=false) {
    let attributes = [
        ['stroke-width', '2'],
        ['stroke', inverse ? 'url(#whisker-gradient-reverse)' : 'url(#whisker-gradient)']
    ];
    let sign = inverse ? -1 : +1;
    let applySign = (p) => [p[0]*sign, p[1]];

    let c1 = [[-40, 15], [-50, -10], [-54, -10]].map(applySign);
    let c2 = [[-25, 10], [-50,   2], [-54,   3]].map(applySign);
    let c3 = [[-25, 10], [-50,   5], [-54,  10]].map(applySign);


    addPath(s, `M${point[0]} ${point[1]}   c ${pointsToString(c1)}`, attributes);
    addPath(s, `M${point[0]-3*sign} ${point[1]+5} c ${pointsToString(c2)}`, attributes);
    addPath(s, `M${point[0]+1*sign} ${point[1]+10} c ${pointsToString(c3)}`, attributes);
}

function pointsToString(points) {
    function pointToString(point) {
        return `${point[0]} ${point[1]}`;
    }
    return points.reduce((str, point) => {
        return str + `, ` + pointToString(point);
    }, '').substr(2);
}

function addPolygon(s, points, attributes=[]) {
    let defaultAttributes = [
        ['points', pointsToString(points)]
    ];

    addSvg(s, 'polygon', defaultAttributes.concat(attributes));
}

function addPath(s, points, attributes=[]) {
    let defaultAttributes = [
        ['d', points],
        ['stroke', '#666'],
        ['stroke-width', '3'],
        ['fill', 'transparent']
    ];
    addSvg(s, 'path', defaultAttributes.concat(attributes));
}

function addLine(s, p1, p2, attributes=[]) {
    let defaultAttributes = [
        ['x1', p1[0]],
        ['y1', p1[1]],
        ['x2', p2[0]],
        ['y2', p2[1]],
        ['stroke', 'rgba(176, 176, 176, 0.4)'],
        ['stroke-width', '1']
    ];
    addSvg(s, 'line', defaultAttributes.concat(attributes));
}

function addCircle(s, center, radius, attributes=[]) {
    let defaultAttributes = [
        ['cx', center[0]],
        ['cy', center[1]],
        ['r', radius],
        ['fill', '#444']
    ];
    addSvg(s, 'circle', defaultAttributes.concat(attributes));
}

function addGradient() {

}

function addSvg(s, type, attributes) {
    let root = s;
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
