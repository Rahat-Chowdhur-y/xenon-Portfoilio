$(document).ready(function() {
  // magnific active js 
    $('.image-popup').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
          }
    });
    // counter active js 
    $('.counter-up').counterUp({
      delay: 20,
      time: 2500
  });
  // slick active js 
  $('.our-testimonial').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });


  // wow active js 
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
});

$(window).load(function(){
  $(window).on('scroll', function(){
    if($(this). scrollTop() > 20){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }
  })
});

  