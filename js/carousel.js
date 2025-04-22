// ==== Gallery Page ====
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".content-item");
    const dots = document.querySelectorAll(".dot");
    let autoSlideInterval;

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        slides.forEach((slide) =>
            slide.classList.remove("content-item--active")
        );
        dots.forEach((dot) => {
            dot.classList.remove("active", "bg-html");
            dot.classList.add("bg-white");
        });

        slides[slideIndex].classList.add("content-item--active");
        dots[slideIndex].classList.add("active", "bg-html");
        dots[slideIndex].classList.remove("bg-white");
    }

    // Assign to WINDOW => Allow to call from HTML
    window.plusSlides = function (n) {
        slideIndex += n;
        showSlide(slideIndex);
        resetAutoSlide();
    };

    // Assign to WINDOW => Allow to call from HTML
    window.goToSlide = function(index) {
        slideIndex = index;
        showSlide(slideIndex);
        resetAutoSlide();
    };
    

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slideIndex++;
            showSlide(slideIndex);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // === Swipe support ===
    // let touchStartX = 0;
    // let touchEndX = 0;

    // carouselContent.addEventListener("touchstart", (e) => {
    //     touchStartX = e.changedTouches[0].screenX;
    // });

    // carouselContent.addEventListener("touchend", (e) => {
    //     touchEndX = e.changedTouches[0].screenX;
    //     handleSwipeGesture();
    // });

    // function handleSwipeGesture() {
    //     const swipeThreshold = 50; // px
    //     const deltaX = touchEndX - touchStartX;
    //     if (Math.abs(deltaX) > swipeThreshold) {
    //         if (deltaX > 0) {
    //             window.plusSlides(-1); // Vuốt sang phải -> slide trước
    //         } else {
    //             window.plusSlides(1); // Vuốt sang trái -> slide sau
    //         }
    //     }
    // }


    // Initialize
    // dots.forEach((dot, index) => {
    //     dot.addEventListener('click', () => {
    //         console.log("asd")
    //         slideIndex = index;
    //         showSlide(slideIndex);
    //         resetAutoSlide();
    //     });
    // });
    showSlide(slideIndex);
    startAutoSlide();
});
