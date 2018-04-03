var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    
	autoplay: {
        delay: 12000,
        disableOnInteraction: false,
    },
	
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});