import './jquery.js';
import '../swiper-master/package/swiper-bundle.min.js'
import '../js/library/jquery.lazyload.js'
import '../js/mi_11.js';

// 头部的二级导航---------------------------
$(function() {
    $('.header-nav-second>li:not(.all)').on('mouseover', function() {
        $('.header-search>.header-nav-second-menu').addClass('second-menu')
    }).on('mouseout', function() {
        $('.header-search>.header-nav-second-menu').removeClass('second-menu')
    })
    $('.header-search>.header-nav-second-menu').on('mouseover', function() {
            $(this).addClass('second-menu')
        }).on('mouseout', function() {
            $(this).removeClass('second-menu')
        })
        // 懒加载---------------------------------
    $('img').addClass('lazy');
    $("img.lazy").lazyload({ effect: "fadeIn" });


    // 轮播图--------------------------------------
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2000
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 倒计时------------------------------
    var time = setInterval(function() {
        let now = new Date();
        let futuer = new Date(2021, 0, 14, 14, 0, 0);
        let ds = futuer - now;
        if (ds >= 0) {
            let date = parseInt(ds / 1000 / 60 / 60 / 24);

            let hours = parseInt((ds / 1000 - date * 24 * 60 * 60) / 60 / 60);
            let m = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) / 60);
            let s = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) % 60);
            if (hours > 10) {
                $('.time-over>.hour')[0].innerHTML = hours;
            } else {
                $('.time-over>.hour')[0].innerHTML = "0" + hours;
            }

            if (m > 10) {
                $('.time-over>.minite')[0].innerHTML = m;
            } else {
                $('.time-over>.minite')[0].innerHTML = '0' + m
            }
            if (s > 10) {
                $('.time-over>.second')[0].innerHTML = s;
            } else {
                $('.time-over>.second')[0].innerHTML = '0' + s
            }
            if (ds == 0) {
                clearInterval(time)
            }
        }

    });
    // ------------------------------------


})