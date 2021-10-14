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

// project slider
$('.project-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
});

// catalog slider
$('.related-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1
});

// catalog slider
$('.related-slider_secondary').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1
});

// product slider
$('.product-main-gallery').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-aside-gallery',
    autoplay: true
});

$('.product-aside-gallery').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    cssEase: 'ease',
    asNavFor: '.product-main-gallery',
    responsive: [
        {
        breakpoint: 1024,
        settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
        breakpoint: 600,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
        breakpoint: 480,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.product-aside-gallery .item').on('click', function(e) {
    const index = $(this).attr('data-slick-index');
    $('.product-main-gallery').slick('slickGoTo', index, false);
});
