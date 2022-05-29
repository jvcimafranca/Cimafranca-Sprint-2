

// slider animation in customer review tab
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,  // it loops around
    grabCursor: true, // can be grabbed by cursor to move
    autoplay: { // automatically shifts to the next image after the delay
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {  // 2 slides per view
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
  });





