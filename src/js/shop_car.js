import './jquery.js';
import { cookie } from './library/cookie.js';
let shop = JSON.parse(cookie.get('shop'));
let idList = shop.map(elm => elm.id).join();
let arr = [];
let money = 0;
let temp = '';
console.log(shop)
if (shop.length == 0) {
    $('.car_pro').css('display', "none");
    $('.car_pro_item').css('display', "none");
    $('.car_pro_pay').css('display', "none");
    $('.car_null').css('display', "block");
} else {
    $('.car_pro').css('display', "block");
    $('.car_pro_item').css('display', "block");
    $('.car_pro_pay').css('display', "block");
    $('.car_null').css('display', "none")
}

$.ajax({
    type: "get",
    url: "../../interface/getItems.php",
    data: {
        idList
    },
    dataType: "json",
    success: function(res) {


        shop.forEach((elm, i) => {


            temp = `<div class="car_pro_item id_${i}">
                    <div class="car_pro_table">
                        <div class="pro_item clearfloat">
                            <div class="pro_check">
                                <i class="iconfont">&#xe640;</i>
                            </div>
                            <div class="car_pro_img">
                                <a href="">
                                    <img src=${elm.img} alt="">
                                </a>
                            </div>
                            <div class="car_pro_name">
                                <a href="">${elm.title} 全网通版 ${elm.txt}</a>
                            </div>
                            <div class="car_pro_price">
                                <b class="every_item">${elm.price}</b>元
                            </div>
                            <div class="car_pro_num">
                                <div class="car_pro_n">
                                    <span class="subtract">
                                        <i>-</i>
                                    </span>
                                    <input type="text" value="1">
                                    <span class="add"><i></i>+</span>
                                </div>
                            </div>
                            <div class="car_pro_all">
                            <b class="car_all_item">${elm.price}</b>元
                            </div>
                            <div class="car_pro_del">
                                <span class="btn_del">
                                    <a href=""><i class="iconfont">&#xe6c9;</i></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="car_pro_insure">
                        <div class="buy_insure">
                            <i>+</i>意外保障服务
                            <span class="insure_price">349元</span>
                            <a href="">了解意外保护 ></a>
                        </div>
                    </div>
                </div>`;
            $('.car_pro_box').append(temp);

        })

        let num = Number($('.car_pro_n input').val())
        $(".subtract").on('click', function() {
            if (num <= 1) {
                alert('商品数量不能小于一')
            } else {
                num--
                $(this).next().val(num)
                let txt = Number($(this).parentsUntil('.car_pro_table').find('.every_item').text());
                let all = txt * num;
                $('.car_all_item')[0].innerHTML = all;
                let value = $(this).parentsUntil('.car_pro_table').find('.pro_check i').hasClass('check_active');
                if (value) {
                    let a = $('.pay_right span').text()
                    $('.pay_right span')[0].innerHTML = Number(a) - txt;
                }

            }
        })
        $(".pro_item").on('click', '.add', function() {
            num++
            $(this).prev().val(num)
            let txt = Number($(this).parentsUntil('.car_pro_table').find('.every_item').text());
            let all = txt * num;
            $('.car_all_item')[0].innerHTML = all;
            let value = $(this).parentsUntil('.car_pro_table').find('.pro_check i').hasClass('check_active')
            if (value) {
                let a = $('.pay_right span').text()
                $('.pay_right span')[0].innerHTML = Number(a) + txt;
            }
        })


        $('.car_pro_pay .pay_left i').eq(0)[0].innerHTML = shop.length;

        $(".pro_list_head .pro_check i").on('click', function() {
            if ($(this).hasClass('check_active')) {
                $(".pro_check i").removeClass('check_active');
                $('.pay_right span')[0].innerHTML = 0;
                $('.car_pro_pay .pay_left i').eq(1)[0].innerHTML = 0;
            } else {
                $(".pro_check i").addClass('check_active');
                let pri = 0;
                let num = [...$('.every_item')];
                num.forEach(elm => {

                    pri += $(elm).text() * $('.car_pro_n input').val()
                    arr.push(pri)

                })
                $('.pay_right span')[0].innerHTML = arr[arr.length - 1];
                $('.car_pro_pay .pay_left i').eq(1)[0].innerHTML = shop.length;
            }
        })
        $(".pro_item").on('click', '.pro_check i', function() {
            let num = $(this).parentsUntil('.car_pro_table').find('input').val();
            if ($(this).hasClass('check_active')) {
                $(this).removeClass('check_active')
                let txt = $(this).parentsUntil('.car_pro_table').find('.every_item').text();
                txt = txt * num;
                let a = $('.pay_right span').text()
                let all = Number(a) - Number(txt);
                $('.pay_right span')[0].innerHTML = all;
                let sl = $('.car_pro_pay .pay_left i').eq(1).text()

                $('.car_pro_pay .pay_left i').eq(1)[0].innerHTML = Number(sl) - 1;
            } else {
                $(this).addClass('check_active')
                let txt = $(this).parentsUntil('.car_pro_table').find('.every_item').text();
                txt = txt * num;
                let a = $('.pay_right span').text()
                let all = Number(a) + Number(txt);
                $('.pay_right span')[0].innerHTML = all;
                let sl = $('.car_pro_pay .pay_left i').eq(1).text()

                $('.car_pro_pay .pay_left i').eq(1)[0].innerHTML = Number(sl) + 1;
            }
        })

        $('.car_pro_box').on('click', '.btn_del', function() {

            let parent = $(this).parentsUntil('.car_pro_box')
            let num = parent.length - 1;
            let par = parent.eq(num).css('display', 'none');
            console.log($(".car_pro_box").children())
            let id = parent.eq(num)[0].className.split(" ")[1].split('_')[1];
            shop.splice(id, 1)
            shop = JSON.stringify(shop)

            cookie.set('shop', shop, 1)
            shop = JSON.parse(cookie.get('shop'))
            let n = shop.length;
            if (n == 0) {
                $('.car_pro').css('display', "none");
                $('.car_pro_item').css('display', "none");
                $('.car_pro_pay').css('display', "none");
                $('.car_null').css('display', "block");
            } else {
                $('.car_pro').css('display', "block");
                $('.car_pro_item').css('display', "block");
                $('.car_pro_pay').css('display', "block");
                $('.car_null').css('display', "none")
            }
        })
    }
});
$('.other_incar').on('mousedown', function() {
    $('.incar_sess').addClass('incar_sess_in')

})
$('.other_incar').on('mouseout', function() {
    $('.incar_sess').removeClass('incar_sess_in')

})