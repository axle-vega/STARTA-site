$(document).ready(function(){
    var $menu = $("#top-menu");
    var $heightscreen = $(window).height();
    $(window).scroll(function(){
        if ( $(this).scrollTop() > $heightscreen && $menu.hasClass("header-menu") ){
            $menu.addClass("fixed-menu");
        } else if($(this).scrollTop() <= $heightscreen && $menu.hasClass("fixed-menu")) {
            $menu.removeClass("fixed-menu");
        }
    });
});


$(function () {
    'use strict';
    $('.readmorelink').click(function () {
        var text = $(this).prev();
        if (text.css('display') == 'none') {
            text.show(100);
            $(this).text('Скрыть подробности');
        } else {
            $(this).text('Читать подробнее');
            text.hide(100);
        }
    }); 
});