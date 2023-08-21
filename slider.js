const nextBtn = document.querySelector('.slider-next');
const prevBtn = document.querySelector('.slider-prev');
const slides = document.querySelectorAll('#photos .block');

let i = 0;

prevBtn.onclick = () => {
  slides[i].classList.remove('active');
  i--;

  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].classList.add('active');
};

nextBtn.onclick = () => {
  slides[i].classList.remove('active');
  i++;

  if (i >= slides.length) {
    i = 0;
  }

  slides[i].classList.add('active');
};
