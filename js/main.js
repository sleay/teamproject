let data='';


let a = new Date();
let day=a.getDay()-1;

if(day==-1){
    day=6;
}




$('header').load('inc.html header > div');




setInterval(function(){
    if($('.section:nth-of-type(4)').hasClass('active')){
        $('.top_search').css({display:'none'});            
    }else{
        $('.top_search').css({display:'block'});            
    }
},1000,clearInterval);




$.ajax({
    
    url:`https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons?updateDay=MON`,
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
    
    url:`https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/kakao-page/finished`,
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
    
                    $('.mySwiper6 > .swiper-wrapper').append(tag)
    
            }

            })
            slide6();
    }
})



$('.mySwiper4 > ul > li').on('click',function(){
    location.href = './detailpage.html';
});

$('.search').on('click',function(){
    $('.searchpage').addClass('active');
    $('.searchpage > div').css({display:'block'});
    $('.searchpage > ul').css({display:'block'});
});








        






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


  




