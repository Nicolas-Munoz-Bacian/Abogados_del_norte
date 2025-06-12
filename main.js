const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.scrolling-servicios__contenido');

prev.addEventListener('click', () => {
    slider.scrollLeft -= 300; // Desplazar 300px a la izquierda
});

next.addEventListener('click', () => {
    slider.scrollLeft += 300; // Desplazar 300px a la derecha
});