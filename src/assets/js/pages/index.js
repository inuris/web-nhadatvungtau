import $ from 'jquery';
window.jQuery = $;
import Swiper from '../lib/swiper/swiper';

$(document).ready(function() {    
    var newsSwiper = new Swiper('.news-swiper', {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 10,
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.news-swiper-links',
            clickable: true,  
            renderBullet: function (index,className){
                var slide = $('.news-swiper').find('[data-name]')[index+1],
                    label = $(slide).attr('data-name');
                return `<div class="cell ${className}">
                            <div class="item">
                                <span>${label}</span>
                            </div>
                        </div>
                        `
            }         
          }
    });
})