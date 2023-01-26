let data='';
let num=0;
let key = 0;
let email='';
  
let cookieDate = new Date();

cookieDate.setDate(
    cookieDate.getDate()+1
);




    



setTimeout(function(){
    $('.intro').fadeOut();
    $('body').css({overflow:'auto'})

   
    document.cookie = `key=value; expires=${cookieDate.toUTCString()}`;
    

},4000,clearTimeout)

if(document.cookie=='key=value'){
    $('.intro').css({display:'none'})
    $('body').css({overflow:'auto'})
}


$('footer').load('inc.html footer > div');


function imgwarp(){
    $.ajax({
    
        url:`https://korea-webtoon-api.herokuapp.com/all/week?day=0`,
        beforeSend:function(){
            console.log('bbb')
        },
        complete:function(){
            console.log('aaa')
        },
        success:function(json){
            data=json;
            console.log('ok')
            $.each(data,function(k,v){
        
                if(k < 7){
                let tag=`<li>
                    <img src="${v.img}">
                </li>`;
        
                        $(".a1 > ul").append(tag)
                }
                
            })
        }
    })
    $.ajax({
        
        url:`https://korea-webtoon-api.herokuapp.com/all/week?day=5`,
        beforeSend:function(){
            console.log('bbb')
        },
        complete:function(){
            console.log('aaa')
        },
        success:function(json){
            data=json;
            console.log('ok')
            $.each(data,function(k,v){
        
                if(k < 7){
                let tag=`<li>
                    <img src="${v.img}">
                </li>`;
        
                        $(".a2 > ul").append(tag)
                }
                
            })
        }
    })
    $.ajax({
        
        url:`https://korea-webtoon-api.herokuapp.com/all/week?day=1`,
        beforeSend:function(){
            console.log('bbb')
        },
        complete:function(){
            console.log('aaa')
        },
        success:function(json){
            data=json;
            console.log('ok')
            $.each(data,function(k,v){
        
                if(k < 7){
                let tag=`<li>
                    <img src="${v.img}">
                </li>`;
                
                        $(".a3 > ul").append(tag)
                }
                
            })
        }
    });
}

imgwarp()

$('.recment').on('click',function(){
    event.preventDefault();
});


$('.acolor > a').each(function(k1,v1){



    $(v1).on('click',function(){
        $('.acolor > a').removeClass('active')
    $('.acolor > a').eq(k1).addClass('active')
        key = k1;
        console.log(key)
        $.ajax({
    
            url:`https://korea-webtoon-api.herokuapp.com/all/week?day=${key}`,
            success:function(json){
                let tag='';
                let tag1='';
                let tag2='';
                data=json;
                console.log('ok')
                $.each(data,function(k,v){
            
                    if(k < 7){

                        
                    tag +=`<li>
                        <img src="${v.img}">
                    </li>`;
                            $(".a1 > ul").html(tag)
                            
                            
                    }
                    if(k>7&&k<15){
                        tag1 +=`<li>
                        <img src="${v.img}">
                    </li>`;
                            $(".a2 > ul").html(tag1)
                    }
                    if(k>15&&k<23){
                        tag2 +=`<li>
                        <img src="${v.img}">
                    </li>`;
                            $(".a3 > ul").html(tag2)
                    }
                    
                })
            }
        })



    });



});



    
    $('.aqna > a').each(function(k,v){

        $(v).on('click',function(){
            event.preventDefault();

            if($('.box').eq(k).hasClass('active')){
                $('.box').eq(k).removeClass('active');
                $('.what > img').eq(k).css({transform:'rotate(0deg)'});
            }
            else{

                $('.box').eq(k).addClass('active');
                $('.what > img').eq(k).css({transform:'rotate(180deg)'});
            }



        console.log(num)
    });

    })


$('.email').bind('input',function(){
    
    email = $('.email').val();

    
    localStorage.setItem("key1",email)
});



$('.insbtn').on('click',function(){
    if($('.inspect').hasClass('active')){
        $('.inspect').removeClass('active')
    }
    else{
        $('.inspect').addClass('active')
    }
})


