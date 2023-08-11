$(()=>{
    // Sliders das imagem de apresentação na página inicial
    $('.bg-img-palestra .container-fluid .bg-image').slick({
        centerMode: false,
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        speed: 1000,
        autoplaySpeed: 2800
    })
})