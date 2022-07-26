$('header').load('inc.html header > div');
$('footer').load('inc.html footer > div');



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
    
            if(k < 6){
            let tag=`<li>
            <a href="${v.url}">
                <input type="checkbox" id="a${k}">
                <label for="a${k}"></label>
                <img src=${v.img} alt="item1">
                <p>${v.title}</p>
            </a>
        </li>`;
            
    
                    $('.list1').append(tag)
            }

            if( k > 6 && k < 13){
                let tag=`<li>
                <a href="${v.url}">
                    <input type="checkbox" id="a${k}">
                    <label for="a${k}"></label>
                    <img src=${v.img} alt="item1">
                    <p>${v.title}</p>
                </a>
            </li>`;
                
        
                        $('.list2').append(tag)
                }

        })
        click();
    }
})

let num = 0;


function click(){

$('.trash').on('click',function(){
    
    if(num<=0){
        num++;
        $('.trash > img').css({transform:'translateY(-12.45px) ',marginBottom:'17.55px'})
        $('.trash > img').attr("src","./images/icon/trash2.png" );
        $('li  label').css({display:'block'})
        $('.trash > span').css({display:'block'})

    }
    else{
        num--;
        $('.trash > img').css({transform:'translateY(0px)',marginBottom:'30px'})
        $('.trash > img').attr("src","./images/icon/trash.png" );
        $('li  label').css({display:'none'})
        $('.trash > span').css({display:'none'})
    }

    $('li  label').each(function(k,v){
        $(v).on('click',function(){

            if($(v).hasClass('active')){
                $('li  label').eq(k).removeClass('active');
            }
            else{
                $('li  label').eq(k).addClass('active');
            }
        });
    });

});

}


$('.btn').each(function(k,v){
    $(v).on('click',function(){

        $('.btn').removeClass('active')
            $('.btn').eq(k).addClass('active')
 


    if(k==0){
        $.ajax({
    
            url:`https://korea-webtoon-api.herokuapp.com/all/finished`,
            success:function(json){
                let tag='';
                let tag1='';
                let tag2='';
                let tag3='';
                data=json;
                console.log('ok')
                $.each(data,function(k,v){
            
                    

                        
                    if(k < 6){
                        tag+=`<li>
                        <a href="${v.url}">
                            <input type="checkbox" id="a${k}">
                            <label for="a${k}"></label>
                            <img src=${v.img} alt="item1">
                            <p>${v.title}</p>
                        </a>
                    </li>`;
                        
                
                                $('.list1').html(tag)
                        }
            
                        if( k > 6 && k < 13){
                            tag1+=`<li>
                            <a href="${v.url}">
                                <input type="checkbox" id="a${k}">
                                <label for="a${k}"></label>
                                <img src=${v.img} alt="item1">
                                <p>${v.title}</p>
                            </a>
                        </li>`;
                        $('.list2').html(tag1)
                    }
                    
                    
                    
                }
                )
            }
        })
    }
    else{
        $.ajax({
    
            url:`https://korea-webtoon-api.herokuapp.com/all/week`,
            success:function(json){
                let tag='';
                let tag1='';
                let tag2='';
                let tag3='';
                data=json;
                console.log('ok')
                $.each(data,function(k,v){
            
                    

                        
                    if(k < 6){
                        tag+=`<li>
                        <a href="${v.url}">
                            <input type="checkbox" id="a${k}">
                            <label for="a${k}"></label>
                            <img src=${v.img} alt="item1">
                            <p>${v.title}</p>
                        </a>
                    </li>`;
                        
                
                                $('.list1').html(tag)
                        }
            
                        if( k > 6 && k < 13){
                            tag1+=`<li>
                            <a href="${v.url}">
                                <input type="checkbox" id="a${k}">
                                <label for="a${k}"></label>
                                <img src=${v.img} alt="item1">
                                <p>${v.title}</p>
                            </a>
                        </li>`;
                        $('.list2').html(tag1)
                    }
                    
                    
                    
                }
                )
            }
        })



    }
});





});

