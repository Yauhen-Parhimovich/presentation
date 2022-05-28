const viewport = window.innerWidth;

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": viewport > 768 ? 80 : viewport > 430 ? 60 :  40,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 30,
        "height": 30
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": viewport > 768 ? 4 : viewport > 430 ? 3 :  2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 8
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


const lang = document.querySelector('.lang')
const buttonRu = document.getElementById('ru');
const buttonEn = document.getElementById('en');
const contentRu = document.querySelector('.content_ru');
const contentEn = document.querySelector('.content_en');


lang.addEventListener('click', (event) => {
  event.stopPropagation()
  if (event.target === buttonEn) {
    buttonEn.classList.add('button_active');
    buttonRu.classList.remove('button_active')
    contentRu.style.display = 'none'
    contentEn.style.display = 'block'


  } else if (event.target === buttonRu) {
    buttonEn.classList.remove('button_active');
    buttonRu.classList.add('button_active')
    contentRu.style.display = 'block'
    contentEn.style.display = 'none'
  }
})

console.log(window.innerWidth)
