function threeFn() {
    window.open('./setting.html');
}

var pubPopup = document.getElementById('pub-popup');
function downLoad() {
    // window.open('./downLoad.html');
    pubPopup.style.display = 'block';
}

function closePop() {
	window.open('http://409300.com/mugua326.apk');
    pubPopup.style.display = 'none';
}

//轮播js
var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay: true, //设置自动循环播放
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
