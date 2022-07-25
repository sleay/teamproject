

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