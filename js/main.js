// catalog slider
$('.catalog__slider, .partners-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1
});

// portfolio slider
$('.portfolio-slider').on('init', function(event, slick) {
    const slidesCount = slick['slideCount'];
    if (slidesCount < 2) {
        return;
    }
    const currentSlide = slick['currentSlide'] + 1;
    const template = `
        <div class="slider-progress">
            <span class="current">${currentSlide}</span>
            /
            <span class="total">${slidesCount}</span>
        </div>
    `;
    $(this).append($(template));
});
$('.portfolio-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    const slideNext = nextSlide + 1;
    $(this).find('.slider-progress .current').text(slideNext);
});
$('.portfolio-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
});
