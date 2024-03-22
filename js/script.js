let currentIndex = 0;

function showSlide(index) {
  const container = document.querySelector(".carousel-container");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  container.style.transform = `translateX(${-index * itemWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex =
    (currentIndex + 1) % document.querySelectorAll(".carousel-item").length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + document.querySelectorAll(".carousel-item").length) %
    document.querySelectorAll(".carousel-item").length;
  showSlide(currentIndex);
}
