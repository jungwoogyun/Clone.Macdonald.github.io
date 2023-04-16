   // Swiper
   var mySwiper  = new Swiper('.main-contents>.banner-section .swiper', {
    direction: 'horizontal', //수평 슬라이드(기본)
    autoplay: {            //시작시 바로 재생 여부
       delay: 1800,
        disableOnInteraction: false //사용자의 action에 따른 슬라이드 동작 정지여부
     },
    loop: true, //무한재생
 
    slidesPerView: 1,  //한번에 보여주는 slide개수
    spaceBetween: 300,   //slide 간격 (px)
    centeredSlides: true,


    // // navigation 
    navigation:{
        prevEl:'.swiper-button-prev',
        nextEl:'.swiper-button-next'
    },  
    // 슬라이더 인디케이터 사용
    pagination: {
        el: '.swiper-pagination',

    },
    

});


// 0idx 슬라이드는 2000초 , 1,2,3 은 1800초로 설정

var currentSlideIndex = mySwiper.realIndex;
if(currentSlideIndex===0){
  delay = 2000; // 슬라이드 0에 대한 delay
  mySwiper.params.autoplay.delay = delay;
  mySwiper.autoplay.start();
}

mySwiper.on('slideChange', function() {
    var currentSlideIndex = mySwiper.realIndex;
     

    delay = 1800; // 슬라이드 2에 대한 delay
 
    mySwiper.params.autoplay.delay = delay;
    mySwiper.autoplay.start();
  });


