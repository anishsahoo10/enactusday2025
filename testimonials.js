// Testimonials Swiper Configuration
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".testimonialsSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: { 
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: { 
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: { 
                slidesPerView: 3,
                spaceBetween: 30
            },
        },
    });
});