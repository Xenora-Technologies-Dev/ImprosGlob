
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
    items:2,
    loop:true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:2
        }
      }
    })
        // REVIEWS CAROUSEL
        $('.reviews-carousel101').owlCarousel({
          items:3,
          loop:true,
          autoplay: true,
          margin:30,
            responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:3
              }
            }
          })
      

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });
    
})(window.jQuery);


$("#newsletter").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxKKF2meuGfLrTgXXi6qZ81cJCQcnQ6A-FRj5FuB5lhl7QWBUnZuwxQWEB8COOjfooSRQ/exec",
        data:$("#newsletter").serialize(),
        method:"post",
        success:function (response){
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

$("#enquiry-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxo5VxLSVxm6upy-oGFdzPrLAyWrP_-IrjundOcLUiK1FjGtMsVSicUsoAjmFePWw55/exec",
        data:$("#enquiry-form").serialize(),
        method:"post",
        success:function (response){
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

$("#contact-form").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbw3pgPQflh4FT0eFo1_XRaxzCZ4VRDERZOvj9T6mvgEOfSanUoZD217j-4fSI4N7Ae3YQ/exec",
                data:$("#contact-form").serialize(),
                method:"post",
                success:function (response){
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })
   