import './jquery.js';
$.ajax({
    type: "get",
    url: "../../interface/getData.php",
    dataType: "json",
    success: function(res) {
        let temp = '';

        res.forEach((elm, i) => {
            let price = elm.pro_price.split(']')[0].split("[").slice(1)[0].split(',')
            let pic = JSON.parse(elm.img);
            temp += `<li class="nav-pro first">
<a href="./mi-11.html?id=${elm.id}">
    <div class="pro-img">
        <img data-original="${pic[0].src}" alt="">
    </div>
    <h6 class="items-title">${elm.pro_title}</h6>
    <p>${price[0]}元起</p>
</a>
</li>`

        });
        $('.header-nav-second-menu .wrapper').append(temp);

    }

});