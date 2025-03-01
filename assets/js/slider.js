$('.main-banner').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    prevArrow: "<i class='a-left control-c prev slick-prev fa-solid fa-chevron-left'></i>",
    nextArrow: "<i class='a-right control-c next slick-next fa-solid fa-chevron-right'></i>",
    slidesToScroll: 1,
});

$('.explore-destination-banner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<i class='a-left control-c prev slick-prev fa-solid fa-chevron-left'></i>",
    nextArrow: "<i class='a-right control-c next slick-next fa-solid fa-chevron-right'></i>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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

$('.trending-banner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<i class='a-left control-c prev slick-prev fa-solid fa-chevron-left'></i>",
    nextArrow: "<i class='a-right control-c next slick-next fa-solid fa-chevron-right'></i>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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

$('.international-destination-banner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<i class='a-left control-c prev slick-prev fa-solid fa-chevron-left'></i>",
    nextArrow: "<i class='a-right control-c next slick-next fa-solid fa-chevron-right'></i>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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