


$(function (){


  $('.carousel').owlCarousel({
    loop: false,
    responsiveClass:true,
    nav: false,
    responsive:{
      0:{
        items:1,
        nav:false,
        stagePadding: 50
      },
      768:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
    }
  });

});


