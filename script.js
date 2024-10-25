        document.addEventListener('DOMContentLoaded', () => {
            const sliderWrapper = document.getElementById('slider-wrapper');
            const arrowRight = document.getElementById('arrow-right');
            let currentSlide = 0;

            arrowRight.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % 4; // Total 4 images
                sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
            });
        });


