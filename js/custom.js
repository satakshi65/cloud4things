//Loader

$(window).bind("load", function () {
    $(".loader-screen").hide();
});

//Scroll top




//Sticky-Menu

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".main-header").addClass("sticky");
    } else {
        $(".main-header").removeClass("sticky");
    }
});


//Menu toggle responsive

$(".menu-toggle").click(function () {
    $(".menu").toggleClass("slide-left");
    $(this).find('i').toggleClass('fa-bars fa-times')
});



$(document).ready(function () {

    //Banner-slider

    $('.banner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 1,
                dots: false,

            },
            1000: {
                items: 1,
            }
        }
    })


    //Client Slider

    $('.client-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: true,
        items: 8,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,

            },
            1000: {
                items: 8,
            }
        }
    })


    //Testi Slider

    $('.testi-slider').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 20,
      nav: false,
      dots: false,
      items: 3,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 1,

          },
          1000: {
              items: 3,
          }
      }
  })

  //readmore

  $(".apply4job").on("click",function(){
    var $this = $(this);
    $this.next().slideToggle();
    if($this.text() === "Read Full Requirement"){
      $this.text("Read Less");
    }else{
      $this.text("Read Full Requirement");
    }
  });

 
 


    //counter

    function inVisible(element) {
        //Checking if the element is
        //visible in the viewport
        var WindowTop = $(window).scrollTop();
        var WindowBottom = WindowTop + $(window).height();
        var ElementTop = element.offset().top;
        var ElementBottom = ElementTop + element.height();
        //animating the element if it is
        //visible in the viewport
        if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
          animate(element);
      }
      
      function animate(element) {
        //Animating the element if not animated before
        if (!element.hasClass('ms-animated')) {
          var maxval = element.data('max');
          var html = element.html();
          element.addClass("ms-animated");
          $({
            countNum: element.html()
          }).animate({
            countNum: maxval
          }, {
            //duration 5 seconds
            duration: 5000,
            easing: 'linear',
            step: function() {
              element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
              element.html(this.countNum + html);
            }
          });
        }
      
      }
      
      //When the document is ready
      $(function() {
        //This is triggered when the
        //user scrolls the page
        $(window).scroll(function() {
          //Checking if each items to animate are 
          //visible in the viewport
          $("h2[data-max]").each(function() {
            inVisible($(this));
          });
        })
      });



    $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});



