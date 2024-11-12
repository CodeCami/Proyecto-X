document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.project-carousel');
    
    carousel.addEventListener('wheel', (e) => {
        e.preventDefault();
        carousel.scrollLeft += e.deltaY;
    });
});

let currentIndex = 0;

function moveCarousel(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Cambia el índice actual
    currentIndex += direction;

    // Asegúrate de que el índice se mantenga dentro del rango
    if (currentIndex < 0) {
        currentIndex = totalTestimonials - 1; // Regresar al último
    } else if (currentIndex >= totalTestimonials) {
        currentIndex = 0; // Volver al primero
    }

    // Mueve el carrusel
    const offset = -currentIndex * 100; // Calcula el desplazamiento
    document.querySelector('.testimonial-carousel').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

