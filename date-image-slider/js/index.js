import { getCurrentTime , getCurrentDate } from "./date.js";

const imgContainer = document.getElementById('imgRoot');
const dateID = document.getElementById('displayDate');
const timeID = document.getElementById('displayTime');
const dotsID = document.getElementById('dots');

// setDateText(); // set Date text
setCurrentTime();

// all slide images
const images = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/2.jpg',
    'http://www.sololearn.com/uploads/slider/3.jpg',
];

// create image tag
const imgTag = document.createElement('img');

imgTag.src = images[0]; // set first image

// style
imgTag.style.position = 'relative';
imgTag.id = 'imgTag';
imgTag.style.width = '100vw';
imgTag.style.height = '100vh';
imgTag.style.zIndex = -1;

setDots();

imgContainer.appendChild(imgTag);
let index = 0;

setInterval(() => {
    setCurrentTime(); // update time every second
}, 1000);

setInterval(() => {
    // set index
    index = index !== images.length - 1 ? index + 1: 0;

    // set active dot to the index
    setActiveDot(index);

    // change image
    changeImg(images[index]);

    setTimeout(() => {
        imgTag.style.removeProperty('animation');
    }, 1000);
    
}, 5000);

function changeImg(hypeLink) {
    imgTag.src = hypeLink;
    imgTag.style.animation = 'slide-in .5s ease-in';
}

function setDateText() {
    dateID.innerHTML = getCurrentDate();
}

function setCurrentTime() {
    timeID.innerHTML = getCurrentTime();
    
    timeID.style.fontSize = '6rem';
    timeID.style.textShadow = '2px 5px 5px #333';
}

function setDots() {
    let dotsArr = [];

    for(let i = 0; i < images.length; i++) {
        dotsArr = [ ...dotsArr, createDot(i) ];
    }
    
    dotsArr.forEach(dot => {
        dotsID.append(dot);
    })

    setActiveDot(0);
}

function createDot(id) {
    const dot = document.createElement('span');
    dot.id = id;
    dot.style.padding = '1px 10px';
    dot.style.border = '1px solid black';
    dot.style.borderRadius = '50px';
    dot.style.backgroundColor = 'white';
    dot.style.bottom = '10px';
    dot.style.margin = '0px 5px';

    return dot;
}

function setActiveDot(index) {
    dotsID.childNodes.forEach(dot => {
        if (dot.style.background) {
            dot.style.background = 'white';
        }
    })

    dotsID.childNodes[index].style.background = '#777';
}