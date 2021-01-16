import './jquery.js';
import { cookie } from './library/cookie.js';
// 登录页选项卡-------------------------
$('.login-form>.nav-tab>.tab-left').on('click', function() {
    $(".login-ID").css('display', 'block');
    $(".login-code").css('display', 'none');

})
$('.login-form>.nav-tab>.tab-right').on('click', function() {
    $(".login-ID").css('display', 'none');
    $(".login-code").css('display', 'block');

})