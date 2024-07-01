


$(document).ready(function () {
    $('.content').hide();
    $('.label-icon').click(function () {
        $(this).siblings().slideToggle()
    });

      $('.second-layer').hide();
    //  $('.item-header').click(function(){
    //     $(this).siblings().children().slideToggle('active')
    //  })
     jQuery(".item-header").click(function(){
        jQuery(".item-header").not(this).siblings("ul").children("li").slideUp(); 
        jQuery(this).siblings("ul").children("li").slideToggle();
});
 // BARS FUNCTIONALITIES
    $('.bars').click(function(){
		$('.custom-add').addClass('active')
	});

    $('.bars').click(function(){
		$('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
	});

    $('.bars').click(function(){
		$('.body').fadeTo(1000,0.5)
	});

// XMARK FUNCTIONALITIES
    $('.xmark').click(function(){
		$('.custom-add').removeClass('active')
	});

    $('.xmark').click(function(){
		$('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
	});

    $('.xmark').click(function(){
		$('.body').fadeTo(0,1)
	});

    $('.reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button"><i class="fa-solid fa-circle-chevron-right"></i></button>',
        prevArrow: '<button type="button"><i class="fa-solid fa-circle-chevron-left"></i></button>',
        centerMode: true,
        // centerPadding: '20px',
        mobileFirst: true,
        
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: '60px',
            }
        },
        {
         breakpoint: 780,
            settings: {
            slidesToShow: 2,
                centerMode: true,
                centerPadding: '80px',
            }
         },
        
         {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            centerMode:true,
            centerPadding: '130px',
           }
         }
        ]


    });
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        dots:true,
        mobileFirst:true,
        arrows:false,
    });
    $('.dashboard-second-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode:true,
        centerpadding:'20px',
        dots:true,
        mobileFirst:true,
        arrows:false,
    });

    
})






















