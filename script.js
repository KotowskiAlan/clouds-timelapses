// DROPDOWN MENU 

let menuWrapper = document.querySelector('.menuWrapper');
let burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuWrapperOn');
})

let timelapseDIYList = document.querySelector('.timelapseDIYList')
let timelapseDIY = document.querySelector('.timelapseDIY');


timelapseDIYList.addEventListener('click', ()=> {
    timelapseDIY.classList.toggle('timelapseDIYOn');
})

// CLOUDS EASE

let cloud1 = document.querySelector('.cloud1');
let cloud2 = document.querySelector('.cloud2');
let cloud3 = document.querySelector('.cloud3');
let cloud4 = document.querySelector('.cloud4');
let cloud5 = document.querySelector('.cloud5');
let cloud6 = document.querySelector('.cloud6');

window.onscroll = function() {
    let yScroll = window.pageYOffset;
    let bodyRect = document.body.getBoundingClientRect();

    let cloudRect1 = cloud1.getBoundingClientRect();
    let windowPosition1 = cloudRect1.top - bodyRect.top - 300;
    if (yScroll >= windowPosition1) {
        cloud1.classList.add('cloudOn1');
    } else {cloud1.classList.remove('cloudOn1');
}
    
    let cloudRect2 = cloud2.getBoundingClientRect();
    let windowPosition2 = cloudRect2.top - bodyRect.top - 300;
    if (yScroll >= windowPosition2) {
        cloud2.classList.add('cloudOn2');
    } else {cloud2.classList.remove('cloudOn2');
}

    let cloudRect3 = cloud3.getBoundingClientRect();
    let windowPosition3 = cloudRect3.top - bodyRect.top - 300;
    if (yScroll >= windowPosition3) {
        cloud3.classList.add('cloudOn3');
    } else {cloud3.classList.remove('cloudOn3');
}

    let cloudRect4 = cloud4.getBoundingClientRect();
    let windowPosition4 = cloudRect4.top - bodyRect.top - 300;
    if (yScroll >= windowPosition4) {
        cloud4.classList.add('cloudOn4');
    } else {cloud4.classList.remove('cloudOn4');
    }

    let cloudRect5 = cloud5.getBoundingClientRect();
    let windowPosition5 = cloudRect5.top - bodyRect.top - 300;
    if (yScroll >= windowPosition5) {
        cloud5.classList.add('cloudOn5');
    } else {cloud5.classList.remove('cloudOn5');
    }

    let cloudRect6 = cloud6.getBoundingClientRect();
    let windowPosition6 = cloudRect6.top - bodyRect.top - 300;
    if (yScroll >= windowPosition6) {
        cloud6.classList.add('cloudOn6');
    } else {cloud6.classList.remove('cloudOn6');
    }
}

// TIMELAPSE SELECT

let actualTimelapse = document.querySelector('.actualTimelapse');


let video = document.createElement("VIDEO");
video.controls = "controls", "muted";
// video.sound = "muted";
actualTimelapse.appendChild(video);
let timelapse = document.querySelectorAll('.timelapse');
actualThumbnail = timelapse[0];
video.src = actualThumbnail.getAttribute('src');

for (let i = 0; i < timelapse.length; i++) {
    timelapse[i].onclick = function() {
        video.src = this.getAttribute('src');
    }
    timelapse[i].onmouseover = function() {
        timelapse[i].play();
       
        
    }
    timelapse[i].onmouseout = function() {
        timelapse[i].pause();      
    }
}

// TIMELAPSE GALERY CAROUSEL

let previousTimelapse = document.querySelector('.previousTimelapse');
let nextTimelapse = document.querySelector('.nextTimelapse');
let timelapses = document.querySelector('.timelapses');
previousTimelapse.addEventListener('click', () => {
    
    timelapses.classList.remove('timelapsesOn');
    previousTimelapse.classList.add('previousTimelapseOn');
    nextTimelapse.classList.remove('nextTimelapseOn');
})

nextTimelapse.addEventListener('click', () => {
    
    timelapses.classList.add('timelapsesOn');
    nextTimelapse.classList.add('nextTimelapseOn');
    previousTimelapse.classList.remove('previousTimelapseOn');
})



