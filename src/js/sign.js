import './jquery.js';
import { cookie } from './library/cookie.js';

$('.area .text i').on('click', function() {
    console.log(9)
    $('.area .area_option').toggleClass('area_hide')


})
let arr = [];
$('.sub_btn').on('click', function() {
    let phone = $('.sign_phone_text .phone_num').val();
    let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
    let result = reg.test(phone)
    if (result) {
        $('.sign_form').css('display', "none")
        $('.sign_msg').css('display', "none")
        let str = "+86" + $(".phone_num").val().slice(0, 3) + "******" + $(".phone_num").val().slice(10)
        $('.news_phone')[0].innerHTML = str;
        let T = 60;
        let time = setInterval(function() {

            T--;
            $('.re_send')[0].innerHTML = T;
            console.log(T);
            if (T == 0) {
                clearInterval(time)
                $('.re_send').on("click", function() {
                    time();
                })
            }
        }, 1000)
        $('.phone_res').css('display', 'block')

        for (let i = 1; i < 5; i++) {
            arr.push(parseInt(Math.random() * 10))
        }
    }
})

console.log(arr)
$('.next').on('click', function() {
    let num = arr.join('');
    if ($('.phone_text').val() == num) {
        $('.phone_res').css('display', 'none')

        $('.sign_news').css('display', 'block')
        let str = "+86" + $(".phone_num").val().slice(0, 3) + "******" + $(".phone_num").val().slice(10)
        $('.phone_n')[0].innerHTML = str;
    }
})
$('.prev').on('click', function() {
    $('.phone_res').css('display', 'none')
    $('.sign_form').css('display', "block")
    $('.sign_news').css('display', 'none')
    $('.sign_msg').css('display', "block")

})

$('.pass_one').on('input', function() {
    let pass = /^.{8,16}$/;
    let res = pass.test($(this).val())
    console.log(res);
    if (res) {
        $('.icon_error').css('display', 'none');
    } else {
        $('.icon_error').css('display', 'inline-block');
    }
})
$('.pass_two').on('input', function() {
    if ($(this).val() != $('.pass_one').val()) {
        $('.pass_tip')[0].innerHTML = '两次密码不同';
        $('.pass_tip').addClass('color');
    } else {
        $('.pass_tip')[0].innerHTML = '密码长度8~16位，数字、字母、字符至少包含两种';
        $('.pass_tip').removeClass('color');
    }
    if ($('.pass_two').val() == $('.pass_one').val()) {
        $('.sub_bttn').removeAttr('disabled');
    } else {
        $('.sub_bttn').attr('disabled');
    }
})