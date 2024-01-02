const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav_toggle','nav_menu')
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 60,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let timer;
let minutes = 45; 
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert("Countdown complete!");
  } else {
    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateDisplay();
  }
}

function updateDisplay() {
  const minutesDisplay = String(minutes).padStart(2, '0');
  const secondsDisplay = String(seconds).padStart(2, '0');
  document.getElementById('minutes').innerText = minutesDisplay;
  document.getElementById('seconds').innerText = secondsDisplay;
}


startTimer();

var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false
  },
})

function myfunction(){
  if (document.getElementById('no').innerText == '14') {
    document.getElementById('no').innerText = '15'
  }else if(document.getElementById('no').innerText == '15'){
    document.getElementById('no').innerText = '14'
  }
  ;
}
function like(){
  var element = document.getElementById('path3');
  element.classList.toggle('path4');
}
