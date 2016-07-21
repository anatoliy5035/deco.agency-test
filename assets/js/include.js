
jQuery(document).ready(function($){
    $(".btn-menu").click(function () {
        $(".menu-wrap").toggleClass("active");
    });

    //activate bxslider
});

$('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    controls: false,
    nextText: false,
    prevText: false
});