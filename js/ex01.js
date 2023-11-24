const ctx = {
    SVG_NS: "http://www.w3.org/2000/svg",
    DEFAULT_POINT_COUNT: 20,
    GLYPH_SIZE: 12,
    w: 480,
    h: 480,
};

function createViz(){
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('style', 'border: 1px solid black');
    svg.setAttribute('id', 'svg')
    svg.setAttribute('width', '480');
    svg.setAttribute('height', '480');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    document.getElementById('main').appendChild(svg);
    /* Method called automatically when the HTML page has finished loading. */
    // ...
};

function handleKeyEvent(e){
    console.log(event)

    /* Callback triggered when any key is pressed in the input text field.
       e contains data about the event.
       visit http://keycode.info/ to find out how to test for the right key value */
    // ...
};

function set(){
    let svg = document.getElementById('svg')
    if (svg.firstChild) {
        clearCanvas()
    }
    let group = document.createElementNS("http://www.w3.org/2000/svg",'g')
    group.setAttribute('id', 'group')
    let circlesNumber = document.getElementById('countTf').value
    for (let i = 0; i <= circlesNumber; i++) {
        let circle = document.createElementNS("http://www.w3.org/2000/svg","circle",);
        circle.setAttribute("cx", `${getRandomInt(0,480)}`);
        circle.setAttribute("cy", `${getRandomInt(0,480)}`);
        circle.setAttribute("r", "10");
        circle.setAttribute("fill", "blue");
        circle.setAttribute('id', 'circles')
        group.appendChild(circle)
    }
    svg.appendChild(group)
    /* Callback triggered when the "Set" button is clicked. */
    // ...
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearCanvas() {
    const element = document.getElementById("group");
    element.remove();
}