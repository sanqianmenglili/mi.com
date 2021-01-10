import './jquery.js';

$(function() {
    $('.header-nav-second>li').on('mouseover', function() {
        $('.header-search>.header-nav-second-menu').addClass('second-menu')
    }).on('mouseout', function() {
        $('.header-search>.header-nav-second-menu').removeClass('second-menu')
    })
    $('.header-search>.header-nav-second-menu').on('mouseover', function() {
        $(this).addClass('second-menu')
    }).on('mouseout', function() {
        $(this).removeClass('second-menu')
    })

})