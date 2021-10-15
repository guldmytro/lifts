// catalog slider
$('.catalog__slider, .partners-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
        breakpoint: 992,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
        breakpoint: 576,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
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
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 768,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        },
    ]
});

// catalog slider
$('.related-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 992,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
        breakpoint: 576,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
});

// catalog slider
$('.related-slider_secondary').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
        breakpoint: 992,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
        breakpoint: 576,
        settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
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
});

$('.product-aside-gallery .item').on('click', function(e) {
    const index = $(this).attr('data-slick-index');
    $('.product-main-gallery').slick('slickGoTo', index, false);
});

$('.header-menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.mobile-menu').slideToggle(200);

});

// intersection observer
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

let targets = document.querySelectorAll('.animate');

let observer = new IntersectionObserver(intersectionCallback, options);
targets.forEach(target => {
    observer.observe(target);
});

function intersectionCallback(entries, observer) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}
