function imgSlider(anything){
    document.querySelector('.scenery').src = anything;
}

$(document).ready(function(){
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});
