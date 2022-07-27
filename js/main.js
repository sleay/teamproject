let data='';


let a = new Date();
let day=a.getDay()-1;

if(day==-1){
    day=6;
}




$('header').load('inc.html header > div');

$('header').ready(function(){
   
    $('.top_search').on('click',function(){
    $('.searchpage').addClass('active');
    $('.searchpage > div').css({display:'block'});
    $('.searchpage > ul').css({display:'block'});

   

   
});
})


setInterval(function(){
    if($('.section:nth-of-type(4)').hasClass('active')){
        $('.top_search').css({display:'none'});            
    }else{
        $('.top_search').css({display:'block'});            
    }
},1000,clearInterval);




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
    
    url:`https://korea-webtoon-api.herokuapp.com/kakao-page/finished`,
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




$('.searchpage > div > button').on('click',function(){
    $('.searchpage').removeClass('active');
    $('.searchpage > div').css({display:'none'});
    $('.searchpage > ul').css({display:'none'});
    $('.searchpage > div > input').val('');
    $('.searchpage > ul').html('');
});



let keyword = '';

$('.searchpage > div > input').bind('input',function(){
    keyword = $('.searchpage > div > input').val();



    

  setTimeout(function(){
        $.ajax({
        
        url:`https://korea-webtoon-api.herokuapp.com/search?keyword=${keyword}`,
        beforeSend:function(){
            console.log('bbb')
        },
        complete:function(){
            console.log('aaa')
        },
        success:function(json){
            data=json;

            let tag = '';
            console.log(data)
           
            $.each(data,function(k,v){

                if(k<10){
                tag +=`    <li>
                <a href="${v.url}">
                    <span>${v.title}</span>
                    <p>${v.author}</p>
                </a>
            </li>`;

               
            }
             $('.searchpage > ul').html(tag);
            });


        }
    })
},500,clearTimeout);

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


  




