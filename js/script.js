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
$('.btn_mobile_menu').on('click', function(){
    $('.mobile_menu').addClass('active')
    $('body').addClass('fixed')
})
$('.close_menu').on('click', function(){
    $('.mobile_menu').removeClass('active')
    $('body').removeClass('fixed')
})
$('.btn_view_all').on('click', function(){
    $('.sn-accordion-container_hide').addClass('active')
    $(this).css('display', 'none')
})
$(document).ready(function(){
let lineBlock = document.querySelector('.grid_line')
function createGridSvg(lineBlock, widthIntervar) {
  let heightBody = $('body').height()
  console.log(heightBody, $(document).outerHeight(true))
  $('.grid_line').height(heightBody)
  lineBlock.innerHTML = ''
  let parent = lineBlock.parentNode
  let width = parent.offsetWidth
  let height = heightBody
  let colorStroke = '#B7B4B4'
  let widthStroke = '0.8';
  for (let i = 0; i <= width; i += widthIntervar) {
      let line1 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
      line1.setAttribute('x1', i)
      line1.setAttribute('y1', 0)
      line1.setAttribute('x2', i)
      line1.setAttribute('y2', height)
      line1.setAttribute('stroke', colorStroke)
      line1.setAttribute('stroke-width', widthStroke)

      lineBlock.appendChild(line1)
  }
}
function resizeCreateGridSVG(){
  setTimeout(function(){
    if (window.innerWidth < 900) {
      createGridSvg(lineBlock, 135)
    } else {
      createGridSvg(lineBlock, 244)
    }
  }, 400)

}
resizeCreateGridSVG()
window.onresize = resizeCreateGridSVG

})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
})
}