var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function() {
$(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
loop: true,
dot: false,
margin: 10,
responsive: {
0: {
items: 1
},
600: {
items: 3
},
1000: {
items: 5
}
}
})

$(window).scroll(function(){
$('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});

$(window).scroll(function(){
$('.nav-link').toggleClass('scroll', $(this).scrollTop() > 150);
});

$(window).scroll(function(){
$('.navbar-brand').toggleClass('sc', $(this).scrollTop() > 150);
});


var preloader = document.getElementById('loading');
function myFun()
{
preloader.style.display = 'none' ;
}
