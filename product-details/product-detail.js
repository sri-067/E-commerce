document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    let index = 0;

    const updateCarousel = () => {
        const totalImages = document.querySelectorAll('.carousel-inner img').length;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        document.querySelectorAll('.carousel-inner img').forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    };

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : 0;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        const totalImages = document.querySelectorAll('.carousel-inner img').length;
        index = (index < totalImages - 1) ? index + 1 : totalImages - 1;
        updateCarousel();
    });

    document.querySelector('.add-to-cart').addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
