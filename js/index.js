let data='';

$('footer').load('inc.html footer > div');

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

$('.recment').on('click',function(){
    event.preventDefault();
});


let num=0;

    
    $('.aqna > a').each(function(k,v){

        $(v).on('click',function(){
            event.preventDefault();



        if(num < 1){
            num++;
            $('.box').eq(k).css({display:'flex',height:'60px'})
            $('div.what > img').eq(k).css({transform:'rotate(180deg)'})
            // animation: textani1 0.3s forwards;
        }
        else if(num >=1){
            num--;
            $('div.what > img').eq(k).css({transform:'rotate(0deg)'})
            $('.box').eq(k).css({display:'none',height:'0px'})
        }

        console.log(num)
    });

    })


   
   
 
