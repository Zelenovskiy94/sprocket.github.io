$(document).ready(function(){

    $(".set_acc > .title_acc").on("click", function(){
      if($(this).hasClass('active')){
        $(this).removeClass("active");
        $(this).closest('.set_acc').removeClass("active");
        $(this).siblings('.content_acc').slideUp(200);
      }else{
        $(".set_acc > .title_acc").removeClass("active");
        $('.set_acc').removeClass("active");
        $(this).addClass("active");
        $(this).closest('.set_acc').addClass("active");
        $('.content_acc').slideUp(100);
        $(this).siblings('.content_acc').slideDown(200);
      }    
    });

    $('.title_chevron').click(function(e) {
        $(this).toggleClass('open').next().slideToggle()
    })
});


let swiper = new Swiper(".slider_auto_height", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1250: {
        slidesPerView: 3,
        spaceBetween: 57,
      },
    },
  });
let swiperSlider = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1250: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });

$('.services_price_list input').on('click', function(){
    let item = $(this).attr('data-item')
    $('.services_price_text div').css('display', 'none')
    $('#'+item).css('display', 'block')
})