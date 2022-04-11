
console.log("oui");

let title = document.getElementById('title');
console.log(title.value);

let slideIndex = 1;
showSlides(slideIndex);

// Les flêches directionnelles pour changer d'image
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Afficher le slide actuel
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} 
