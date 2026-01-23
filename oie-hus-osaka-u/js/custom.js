'use strict';

$(function(){
    var topBtn = $('#back-top');
    topBtn.hide();
    $(window).scroll(function() {
        var w = $(window).width();
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    if (banner) {
        const closeButton = document.getElementById('close-button');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // スクロール位置が100pxを超えたら表示
                // TODO: ここで1度でも手動で消していた場合、表示させない
                if (!banner.classList.contains("banner-hide")){
                    banner.style.display = 'block';
                }
            }
        });

        closeButton.addEventListener('click', () => {
            banner.style.display = 'none';
            banner.classList.add("banner-hide");
        });
    }
});
