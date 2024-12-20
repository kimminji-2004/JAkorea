$(function () {
    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next-prg",
            prevEl: ".swiper-button-prev-prg",
        },
        // pagination: {
        //     el: ".main-tab",
        //     clickable: true,
        // },
        });


    // var swiper = new Swiper(".slide-box", {
    //     slidesPerView: 3,
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     navigation: {
    //         nextEl: ".swiper-button-next-news",
    //         prevEl: ".swiper-button-prev-news",
    //     },
    //     });
      

    // 드롭다운
    $(".main-gnb").mouseenter(function(){
        $(".header-wrap").addClass("active");
    });

    $(".sub-gnb").mouseleave(function(){
        $(".header-wrap").removeClass("active");
    });
});
