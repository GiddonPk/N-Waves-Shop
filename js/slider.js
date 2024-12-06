let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar los indicadores
    const indicators = document.querySelectorAll('.controles div');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('bola1');
            indicator.classList.remove('bola');
        } else {
            indicator.classList.add('bola');
            indicator.classList.remove('bola1');
        }
    });
}

updateSlider();
