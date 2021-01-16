import './jquery.js';
import '../swiper-master/package/swiper-bundle.min.js'
import '../js/library/jquery.lazyload.js'
import '../js/php.js'



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


    // 轮播图----------------------------------------
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

    //添加阴影--------------------------------
    $('.phone-col-4').on('mouseover', function() {
        $(this).addClass('pro-style')
    }).on('mouseout', function() {
        $(this).removeClass('pro-style')
    })
    $('.col-16>li:not(".last-pro")').on('mouseover', function() {
        $(this).addClass('pro-style')
    }).on('mouseout', function() {
        $(this).removeClass('pro-style')
    })
    $('.col-4>li').on('mouseover', function() {
        $(this).addClass('pro-style')
    }).on('mouseout', function() {
        $(this).removeClass('pro-style')
    })
    $('.col-16>.last-pro>div').on('mouseover', function() {
        $(this).addClass('pro-style')
    }).on('mouseout', function() {
        $(this).removeClass('pro-style')
    })
    $('.video>.video-items>li').on('mouseover', function() {
        $(this).addClass('pro-style')
    }).on('mouseout', function() {
        $(this).removeClass('pro-style')
    })

    $('.title>.more>li').on('mouseover', function() {
        let select = $(this).parent().parent().parent().attr('class').split(' ')[0];
        let selector = `.${select} .more>li`
        $(selector).removeClass('active');
        $(this).addClass('active');
        let res = $(this).attr('class').split(' ')[0];
        let col_select = `.${select} .col-16`;
        $(col_select).css('display', 'none');


        switch (res) {

            case 'col-4-one':
                $(`.${select} .col-16-one`).css('display', 'block')
                break;
            case 'col-4-two':
                $(`.${select} .col-16-two`).css('display', 'block')
                break;
            case 'col-4-three':
                $(`.${select} .col-16-three`).css('display', 'block')
                break;
        }
    })
    $(".look-mi .wx").on('mouseover', function() {
        $(".look-mi>img").css('display', 'block')
    }).on('mouseout', function() {
        $(".look-mi>img").css('display', 'none')
    })


    var time = setInterval(function() {
        let now = new Date();
        let futuer = new Date(2021, 0, 24, 16, 0, 0);
        let ds = futuer - now;
        if (ds >= 0) {
            let date = parseInt(ds / 1000 / 60 / 60 / 24);

            let hours = parseInt((ds / 1000 - date * 24 * 60 * 60) / 60 / 60);
            let m = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) / 60);
            let s = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) % 60);

            $('.time>span').eq(0)[0].innerHTML = "0" + hours;
            if (m > 10) {
                $('.time>span').eq(1)[0].innerHTML = m;
            } else {
                $('.time>span').eq(1)[0].innerHTML = '0' + m
            }
            if (s > 10) {
                $('.time>span').eq(2)[0].innerHTML = s;
            } else {
                $('.time>span').eq(2)[0].innerHTML = '0' + s
            }
            if (ds == 0) {
                clearInterval(time)
            }
        }

    })

    var myswiper = new Swiper('.swiper-container-1', {
        slidesPerView: 4,
        spaceBetween: 14,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})