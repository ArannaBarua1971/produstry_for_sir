// jquery link
$(document).ready(function () {

     // navbar js 
     $('.handbar .show').on('click',function(){
        $('.menu_bar_show').animate({right:'0px'})
        $('.hide_everything').animate({width:'100%'})
    })
    $('.handbar .hide').on('click',function(){
        $('.hide_everything').animate({width:'0%'})
        $('.menu_bar_show').animate({right:'-250px'})
    })
    $('.nav_btn').on('click',function(){
        $('.menu').toggleClass('showHide')
        $('#navbar .logo').toggleClass('left_side')
    })

    
    // --> for banner slider
    $('.slider').slick({
        prevArrow: '<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        autoplay: true,
    })

 
})


