// DROPDOWN MENU & SMOL DROPDOWN MENU

const menuWrapper = document.querySelector('.menuWrapper');
const burgerMenu = document.querySelector('.burgerMenu');

burgerMenu.addEventListener('click', () => {
    menuWrapper.classList.toggle('menuWrapperOn');
})

const timelapseDIYList = document.querySelector('.timelapseDIYList')
const timelapseDIY = document.querySelector('.timelapseDIY');
const timelapseTriangle = document.querySelector('.timelapseTriangle');


timelapseDIYList.addEventListener('click', ()=> {
    timelapseDIY.classList.toggle('timelapseDIYOn');
    timelapseTriangle.classList.toggle('timelapseTriangleOn');
})

// WINDOWS EASE-IN & OUT

const easingElements = document.querySelectorAll(".easing");

const onScroll = () => {
    const yScroll = window.pageYOffset;
    const bodyRect = document.body.getBoundingClientRect();

    easingElements.forEach((el) => {
      const cloudRect = el.getBoundingClientRect();
      const windowPosition = cloudRect.top - bodyRect.top - 200;

      yScroll >= windowPosition ? el.classList.add('easingOn') : el.classList.remove('easingOn');
    })
}

window.addEventListener("scroll", onScroll)

// TIMELAPSE GALLERY

let actualTimelapse = document.querySelector('.actualTimelapse');

const video = document.createElement("VIDEO");
video.controls = "controls";
video.muted = "muted";
actualTimelapse.appendChild(video);
let timelapses = document.querySelectorAll('.timelapse');
actualThumbnail = timelapses[0];
video.src = actualThumbnail.getAttribute('src');

for (let i = 0; i < timelapses.length; i++) {
    timelapses[i].onclick = () => {
      video.src = timelapses[i].getAttribute('src');
    }

    timelapses[i].onmouseover = function() {
        timelapses[i].play();
    }
    timelapses[i].onmouseout = function() {
        timelapses[i].pause();
    }
}

// TIMELAPSE GALERY CAROUSEL
const previousTimelapse = document.querySelector('.previousTimelapse');
const nextTimelapse = document.querySelector('.nextTimelapse');
const timelapsesCarouselElements = document.querySelector('.timelapses');

previousTimelapse.addEventListener('click', () => {
    timelapsesCarouselElements.classList.remove('timelapsesOn');
    previousTimelapse.classList.add('previousTimelapseOn');
    nextTimelapse.classList.remove('nextTimelapseOn');
})

nextTimelapse.addEventListener('click', () => {
    timelapsesCarouselElements.classList.add('timelapsesOn');
    nextTimelapse.classList.add('nextTimelapseOn');
    previousTimelapse.classList.remove('previousTimelapseOn');
})



