$(function(){

    //Click menu-mobile
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    })

    //menuScroll
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offSetTop});
        return false;
    })

   
});

 $(function(){

//  //Slider
 
//  var curIndex = 0;
//  var delay = 3000;
 initSlider();
// //  autoPlay();

      function initSlider(){
     var amt = $('.sobre-autor').lenght;
     var sizeContainer = 100 * amt;
     var sizeBoxSingle = 100 / amt;
     $('.sobre-autor').css('width',sizeBoxSingle+'%');
     $('.scroll-wraper').css('width',sizeContainer+'%');

//      for(var i = 0; i < amt; i++){
//          if(i==0){
//              $('.slider-bullets').append('<span style="background-color:rgb(170,170,170)></span>');
//          }else{
//             $('.slider-bullets').append('<span></span>');
//          }
//      }
 
 }

//  function autoPlay(){
//      setInterval(function(){
//          curIndex++;
//          if(curIndex == amt){
//              curIndex = 0;
//          }
//          goToSlider(curIndex);
//      }, delay)
//  }

// function goToSlider(curIndex){
//     var offSetX = $('.sobre-autor').eq(curIndex).offset().left;

//     $('scrollEquipe').animate({'scrollleft':offSetX})
// }


})