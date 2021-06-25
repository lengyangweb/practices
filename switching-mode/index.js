const ball = document.querySelector('.ball');
const mainContainer = document.querySelector('.main-container');
const container = document.querySelector('.container');
let mode = document.querySelector('#mode');

let light = "Off";

/*
    A switching mode function
*/
const lightSwitch = () => {
    if(light === 'Off') {
        turnOn();
    } else {
        turnOff()
    }
}

/*
    A function that change from light to dark
*/
const turnOn = () => {
    // light is now On
    light = "On";
    setTimeout(() => { 
        // Changing the main background to dark
        mainContainer.classList.add('dark-theme');
        mainContainer.classList.remove('light-theme');
        
        // Changing ball class to dark
        ball.classList.add('ball-dark');
        ball.classList.remove('ball');
        
        // Change mode-bar from light to dark
        container.classList.remove('container-light');
        container.classList.add('container-dark');
        
        // Change text
        mode.innerHTML = "Change to light mode";
    }, 100);
}

/*
    A function that changes from dark to light
*/
const turnOff = () => {
    // Light is now Off
    light = "Off";
    setTimeout(() => { 
        // Changing the main background to light
        mainContainer.classList.remove('dark-theme');
        mainContainer.classList.add('light-theme');
        
        // Changing ball class to light
        ball.classList.remove('ball-dark');
        ball.classList.add('ball');
        
        // Change mode bar from dark to light
        container.classList.remove('container-dark');
        container.classList.add('container-light');
        
        // Change text
        mode.innerHTML = "Change to dark mode";
    }, 100);
}

/*
    An event that's listening when ball is click
*/
ball.addEventListener('click', lightSwitch);