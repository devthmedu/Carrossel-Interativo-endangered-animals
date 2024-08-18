// app.js

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel .list');
  const items = carousel.querySelectorAll('.item');
  const totalItems = items.length;
  let currentIndex = 0;
  const intervalTime = 3000; // Tempo entre transições (em milissegundos)

  function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  function updateCarousel() {
    items.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateX(100%)'; // Ajuste conforme o seu design
      }
    });
  }

  setInterval(showNextItem, intervalTime);
  updateCarousel();
});
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel .list .item');
  const thumbnails = document.querySelectorAll('.thumbnail .item');
  const nextButton = document.querySelector('.carousel .arrows .next');
  const prevButton = document.querySelector('.carousel .arrows .prev');
  const timeIndicator = document.querySelector('.carousel .time');
  let currentIndex = 0;
  let interval;

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.zIndex = '0';
      thumbnails[i].style.opacity = '0.6';
    });

    items[index].style.opacity = '1';
    items[index].style.zIndex = '1';
    thumbnails[index].style.opacity = '1';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
    resetTimeIndicator();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
    resetTimeIndicator();
  }

  function resetTimeIndicator() {
    timeIndicator.style.width = '0%';
    clearInterval(interval);
    interval = setInterval(() => {
      let currentWidth = parseFloat(getComputedStyle(timeIndicator).width);
      let totalWidth = parseFloat(
        getComputedStyle(timeIndicator.parentElement).width,
      );
      let newWidth = (currentWidth / totalWidth) * 100;
      if (newWidth >= 100) {
        nextSlide();
      } else {
        timeIndicator.style.width = `${newWidth + 1}%`;
      }
    }, 30);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Initialize carousel
  showItem(currentIndex);
  resetTimeIndicator();
});
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const slides = carousel.querySelectorAll('.list .item');
  const thumbnails = carousel.querySelectorAll('.thumbnail .item');
  const prevButton = carousel.querySelector('.arrows .prev');
  const nextButton = carousel.querySelector('.arrows .next');
  const timeBar = carousel.querySelector('.time');

  let currentIndex = 0;
  let timer;

  const showSlide = (index) => {
    // Hide all slides
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '1' : '0';
    });

    // Highlight active thumbnail
    thumbnails.forEach((thumb, i) => {
      thumb.style.opacity = i === index ? '1' : '0.5';
    });

    // Start the time bar animation
    timeBar.style.width = '0%';
    timeBar.style.transition = 'none';
    requestAnimationFrame(() => {
      timeBar.style.transition = 'width 3s linear';
      timeBar.style.width = '100%';
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetTimer();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3000); // Slide interval
  };

  // Event listeners for buttons
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Thumbnail click event
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
      resetTimer();
    });
  });

  // Initial setup
  showSlide(currentIndex);
  resetTimer();
});
