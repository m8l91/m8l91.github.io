
  // let slides = document.querySelectorAll('.slide');
  // let currentSlide = 0;
  // let slideInterval = setInterval(nextSlide,2000);

  // function nextSlide(){
  //     slides[currentSlide].classList.remove('active');
  //     currentSlide = (currentSlide+1)%slides.length;
  //     slides[currentSlide].classList.add('active');
  // }

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
slides[currentSlide].classList.add('active');
// let slideInterval = setInterval(nextSlide,5000);
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

prevButton.addEventListener('click', function() {
  // clearInterval(slideInterval);
  prevSlide();
  // slideInterval = setInterval(nextSlide,2000);
});

nextButton.addEventListener('click', function() {
  // clearInterval(slideInterval);
  nextSlide();
  // slideInterval = setInterval(nextSlide,2000);
});

function prevSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide = currentSlide === 0 ? slides.length-1 : currentSlide-1;
    slides[currentSlide].classList.add('active');
}

function nextSlide(){
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].classList.add('active');
}
