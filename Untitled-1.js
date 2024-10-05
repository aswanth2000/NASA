document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#imageSlider');
    
    if (carousel) {
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000, // 3 seconds interval
            pause: false // Don't pause on hover
        });

        // Optional: Enhance the hover effect on images
        const carouselItems = document.querySelectorAll('.carousel-item img');

        carouselItems.forEach(item => {
            item.style.transition = 'transform 0.5s ease';

            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05)'; // Slight zoom effect
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)'; // Reset scale
            });
        });
    } else {
        console.error("Carousel element not found");
    }
});
