import './jquery.js';
import { cookie } from './library/cookie.js';
// import './php.js'
let p_n = JSON.parse(cookie.get('shop')).length;
$('.shop-car .p_n')[0].innerHTML = `(${p_n})`;

let id = location.search.split('=')[1];
$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function(res) {
        let p_n = JSON.parse(cookie.get('shop')).length;
        $('.shop-car .p_n')[0].innerHTML = `(${p_n})`;
        let n = 0;
        console.log(res)
        let title = `<h2>${res.pro_title}</h2>`;
        $(".product-nav .wrapper").prepend(title);
        let price = JSON.parse(res.pro_price);

        let temp = `<h2 class="pro_title">${res.pro_title}</h2>
        <p class="sale">
           ${res.sale}
        </p>
        <p class="mi-boss">小米自营</p>
        <div class="pro-money">
            <span>${price[0]} 元</span>
        </div>
        <div class="pro-order">
                        <div class="left">
                            <span class="tip">预约中</span>
                            <span class="price">
                                <i>￥</i>
                                ${price[0]}
                            </span>
                        </div>
                        <div class="right">
                            <div class="pro-time">
                                <span class="tip-over">
                                    距结束
                                </span>
                                <span class="time-over">
                                    <span class="hour">
                                        11
                                    </span>:
                                <span class="minite">
                                        21
                                    </span>:
                                <span class="second">
                                    20
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>`
        $(".pro-text").prepend(temp);
        let color = '';
        res.pro_color.split(',').forEach((elm, i) => {
            color += `<li class="color-phone">
            <a href="#">${elm}</a>
        </li>`
        })
        $(".color-info").prepend(color);
        let ram = '';

        res.ram.split(',').forEach((elm, i) => {

            ram += ` <li class="ram-phone ram_${n}">
            <a href="#">${elm}</a>
        </li>`;
            n += 1;
        })
        $(".ram-info").prepend(ram);
        let pic = JSON.parse(res.img).slice(1);

        let banner = '';
        pic.forEach((elm, i) => {
            banner += `<div class="swiper-slide" style="background-image:url(${elm.src})"></div>`
        })
        $(".swiper-wrapper").prepend(banner);
        // -------------------------------------------


        $('.color-phone').eq(0).addClass('active');
        $('.ram-phone').eq(0).addClass('active');


        let arr = [];
        let txt_c = $('.color-info .active a').text().split(' ');
        let txt_r = $('.ram-info .active a').text().split(' ');
        arr.push(txt_c, txt_r);
        let text = arr.join('');
        console.log(text);
        let pro_res = `<p class="pro-res-info"><b class="pro_newss">${res.pro_title} ${text}</b>  <span>${price[0]}元</span></p>
    <div class="pro-res-price">
        总计:<i>${price[0]}</i>元
    </div>`;
        $('.pro-res')[0].innerHTML = pro_res;
        $('.color-phone').on('click', function() {
            $('.color-phone').removeClass('active');
            $(this).addClass('active');

            let txt = $('.color-info .active a').text().split(' ')
            arr.shift()
            arr.unshift(txt)
            let str = arr.join('');
            let pro_res = `${res.pro_title} ${str}
            `;
            $('.pro-res .pro-res-info .pro_newss')[0].innerHTML = pro_res;
        })

        $('.ram-phone').on('click', function() {
                $('.ram-phone').removeClass('active');
                let num = $(this).addClass('active').attr('class').split(' ')[1].split('_')[1];

                arr.pop()
                let txt = $('.ram-info .active a').text().split(' ')
                arr.push(txt)
                let str = arr.join('');
                let pro_res = `<p class="pro-res-info"><b class="pro_newss">${res.pro_title} ${str}</b>  <span>${price[num]}元</span></p>
                <div class="pro-res-price">
                    总计:<i>${price[num]}</i>元
                </div>`;
                $(".pro-order .price")[0].innerHTML = `<i>￥</i>
            ${price[num]}`
                $('.pro-money span')[0].innerHTML = `${price[num]}`
                console.log(price[num])
                $('.pro-res')[0].innerHTML = pro_res;

            })
            // --------------------------------------
        $('.acc-info>li').on('click', function() {
            $(this).toggleClass('acc_active');
            let res = $(this).find('.acc-logo').toggleClass('acc_font_active').hasClass('acc_font_active');
            console.log(res)
            if (res) {
                $(this).find('.acc-logo')[0].innerHTML = "&#xe632;";
                $(this).find('.acc-logo').addClass("acc_font_active");
                $(this).find('.checked b').addClass('acc_font_bg');
            } else {
                $(this).find('.acc-logo')[0].innerHTML = "&#xe63f;";
                $(this).find('.acc-logo').removeClass("acc_font_active");
                $(this).find('.checked b').removeClass('acc_font_bg');
            }
        })
        var time = setInterval(function() {
            let now = new Date();
            let futuer = new Date(2021, 0, 24, 19, 0, 0);
            let ds = futuer - now;
            if (ds >= 0) {
                let date = parseInt(ds / 1000 / 60 / 60 / 24);
                let hours = parseInt((ds / 1000 - date * 24 * 60 * 60) / 60 / 60);
                let m = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) / 60);
                let s = parseInt((ds / 1000 - date * 24 * 60 * 60 - hours * 60 * 60) % 60);

                if (hours > 10) {
                    console.log(hours)
                    $('.hour')[0].innerHTML = hours;
                } else {
                    $('.hour')[0].innerHTML = "0" + hours;
                }
                if (m > 10) {
                    $('.minite')[0].innerHTML = m;
                } else {
                    $('.minite')[0].innerHTML = '0' + m
                }
                if (s > 10) {
                    $('.second')[0].innerHTML = s;
                } else {
                    $('.second')[0].innerHTML = '0' + s
                }
                if (ds == 0) {
                    clearInterval(time)
                }
            }

        })
        $('head title')[0].innerHTML = `${res.pro_title}`;

        $('.pro-into-car .pro-into a').on('click', function() {
            let price = $('.pro-res .pro-res-price i').text();
            arr.reverse();
            let txt = arr.join('');
            let title = $('.pro_title').text()
            let img = JSON.parse(res.img).slice(0)[0].src;
            car(res.id, price, txt, title, img)

            if (Number(p_n) > 0) {
                $('.shop-car').addClass('more_car')
                $('.shop-car .p_n')[0].innerHTML = `(${p_n})`;


            } else {
                $('.shop-car').removeClass('more_car')
                $('.shop-car .p_n')[0].innerHTML = `(${p_n})`;
            }
            $(this).attr('href', '')
        })


    }
});



function car(id, price, txt, title, img, num) {
    let shop = cookie.get('shop')
    let pro = {
        id,
        price,
        txt,
        title,
        img
    }
    if (shop) {
        shop = JSON.parse(shop);
        shop.push(pro);
    } else {
        shop = [];
        shop.push(pro);
    }
    cookie.set('shop', JSON.stringify(shop), 1)
}

if (Number(p_n) > 0) {
    $('.shop-car').addClass('more_car')

} else {
    $('.shop-car').removeClass('more_car')
}