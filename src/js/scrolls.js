$(document).ready(function() {
    $('.scroll-down').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
        scrollTop: $(el).offset().top}, 700);
        return false;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var HeightScreen = $(window).height();
    $("#button-up").css({
        "bottom": "10px",
        "right": "10px"
    });

    $(window).scroll(function() {

        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });

    $('#button-up').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
