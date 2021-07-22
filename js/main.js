// Input tel mask
var phoneMask = IMask(
  document.getElementById('phone_number'), {
    mask: '+{7}(000)000-00-00',
  });
  document.getElementById("info_client").addEventListener('submit', function(e) {
  e.preventDefault()
  let phone =  document.getElementById('phone_number')
  if(phone.value.length < 16){
    phone.style.borderBottom = '1px solid red';
    return
  }
  
  this.submit()
})
// Swiper 1 (rates)
var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  }
});

// Swiper 2 (services)
var swiper2 = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  slidesPerView:4,
  loop: 1,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

// Swiper 3 (feedback)
var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }
});

// Swiper 4 (teachers)
var swiper4 = new Swiper(".mySwiper4", {
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },

  }
});

// Input tel mask 2
var phoneMask2 = IMask(
  document.getElementById('phone_number2'), {
    mask: '+{7}(000)000-00-00'
  });

// Menu burger
const iconMenu = document.querySelector('.menu_burger');
if (iconMenu) {
    const menuBody = document.querySelector('.header__container_items2');
    iconMenu.addEventListener("click", function(e) {
        // document.body.classList.toggle('__lock');
        iconMenu.classList.toggle('__active');
        menuBody.classList.toggle('___active');

    })
}