let first =document.getElementById("first")
let last = document.getElementById("last")
let text = document.getElementById("text")

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    first.style.top = value * 0.7 + 'px';
    last.style.bottom = value * 0.5 + 'px'
    text.style.top = value * 1 +'px'
})


var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleclass('show');
  });
});









