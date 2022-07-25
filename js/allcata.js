let a = new Date();
let day=a.getDay();





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
    
            if(k < 6){
            let tag=`<li>
                <img src="${v.img}" alt="">
                <p>${v.title}</p>
            </li>`;
    
                    $('.list1').append(tag)
            }
            if(k > 6 &&k < 13){
                let tag=`<li>
                    <img src="${v.img}" alt="">
                    <p>${v.title}</p>
                </li>`;
                        $('.list2').append(tag)
            }
            if(k > 13 &&k < 20){
                let tag=`<li>
                    <img src="${v.img}" alt="">
                    <p>${v.title}</p>
                </li>`;
                        $('.list3').append(tag)
            }
            if(k > 20 &&k < 27){
                let tag=`<li>
                    <img src="${v.img}" alt="">
                    <p>${v.title}</p>
                </li>`;
                        $('.list4').append(tag)
            }
            
        })
    }
})









key = 0;
$('.nav > li').each(function(k1,v1){

    if(day==k1){
        $(v1).addClass('active')
    }


    $(v1).on('click',function(){
        key = k1;
        console.log(key)

        
        $('.nav > li').removeClass('active')
        $('.nav > li').eq(k1).addClass('active')







        $.ajax({
    
            url:`https://korea-webtoon-api.herokuapp.com/all/week?day=${key}`,
            success:function(json){
                let tag='';
                let tag1='';
                let tag2='';
                let tag3='';
                data=json;
                console.log('ok')
                $.each(data,function(k,v){
            
                    

                        
                    if(k < 6){
                    tag +=`<li>
                        <img src="${v.img}" alt="">
                        <p>${v.title}</p>
                    </li>`;
                            $(".list1").html(tag)
                            
                            
                    }
                    if(k > 6 &&k < 13){
                        tag1 +=`<li>
                        <img src="${v.img}" alt="">
                        <p>${v.title}</p>
                    </li>`;
                            $(".list2").html(tag1)
                    }
                    if(k > 13 &&k < 20){
                        tag2 +=`<li>
                        <img src="${v.img}" alt="">
                        <p>${v.title}</p>
                    </li>`;
                            $(".list3").html(tag2)
                    }
                    if(k > 20 &&k < 27){
                        tag3 +=`<li>
                        <img src="${v.img}" alt="">
                        <p>${v.title}</p>
                    </li>`;
                            $(".list4").html(tag3)
                    }
                }
                )
            }
        })
    });
});















$('header').load('inc.html header > div');
$('footer').load('inc.html footer > div');