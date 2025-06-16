const carousel = document.querySelector('.carousel-inner');
let offset = 0;

document.querySelector('.next-btn').onclick = function() {
  offset -= 320; // ширина карточки + отступ
  carousel.style.transform = `translateX(${offset}px)`;
};

document.querySelector('.prev-btn').onclick = function() {
  offset += 320;
  carousel.style.transform = `translateX(${offset}px)`;
};
