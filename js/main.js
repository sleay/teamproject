let data='';


let a = new Date();
let day=a.getDay();

$('header').load('inc.html header > div');

$.ajax({
    
    url:`https://korea-webtoon-api.herokuapp.com/all/week?day=${day}`,
    beforeSend:function(){
        console.log('bbb')
    },
    complete:function(){
        console.log('aaa')
    },
    success:function(json){
        data=json;

        $.each(data,function(k,v){
    
            if(k < 21){
            let tag=`<li class="swiper-slide">
                        <a href="${v.url}">
                            <img src="${v.img}" alt="">
                            <p>${v.title}</p>
                        </a>
                    </li>`;
    
                    $('.mySwiper3 > .swiper-wrapper').append(tag)
            }
            
        })
        slide3();
    }
})
$.ajax({
    
    url:`https://korea-webtoon-api.herokuapp.com/all/finished`,
    beforeSend:function(){
        console.log('bbb')
    },
    complete:function(){
        console.log('aaa')
    },
    success:function(json){
        data=json;
        console.log(data)


        $.each(data,function(k,v){
    
            if(k < 21){
            let tag=`<li class="swiper-slide">
                        <a href="${v.url}">
                            <img src="${v.img}" alt="">
                            <p>${v.title}</p>
                        </a>
                    </li>`;
    
                    $('.mySwiper6 > .swiper-wrapper').append(tag)
    
            }

            })
            slide6();
    }
})


        






//////////////////////////////////////////////////////////////////////////////////////////////////



var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: false,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    thumbs: {
    swiper: swiper,
    },
    autoplay: {
delay: 2500,
disableOnInteraction: false,
},
speed:1000,
});


    
function slide3(){
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 7,
    spaceBetween: 50,
    slidesPerGroup: 7,
    speed:1000,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    freeMode:true
});
}


var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 7,
    spaceBetween: 50,
    slidesPerGroup: 7,
    speed:1000,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    freeMode:true
});

var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 7,
    spaceBetween: 50,
    slidesPerGroup: 7,
    speed:1000,
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev6",
    },
    freeMode:true
    });
function slide6(){
    var swiper = new Swiper(".mySwiper6", {
        slidesPerView: 7,
        spaceBetween: 50,
        slidesPerGroup: 7,
        speed:1000,
        navigation: {
            nextEl: ".swiper-button-next6",
            prevEl: ".swiper-button-prev7",
        },
        freeMode:true
        });
    }




  