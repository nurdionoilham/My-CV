/* =============================
   PORTFOLIO SLIDER
============================= */
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);
showSlide();

/* =============================
   SCROLL REVEAL EFFECT
============================= */
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* =============================
   BACK TO TOP
============================= */
const backTop = document.querySelector('.back-top');
if (backTop) {
    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}