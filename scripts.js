document.addEventListener("DOMContentLoaded", () => {

  // Fade-in observer
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));


  // Reviews carousel
  const reviews = document.querySelectorAll('.review-card');
  const indicators = document.querySelectorAll('.indicator');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let current = 0;

  function showReview(index) {
    reviews.forEach((r, i) => r.classList.toggle('active', i === index));
    indicators.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % reviews.length;
    showReview(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
  });

  indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      current = i;
      showReview(current);
    });
  });

  setInterval(() => {
    current = (current + 1) % reviews.length;
    showReview(current);
  }, 6000);

});
