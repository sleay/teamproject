

$('header').ready(function(){
    
    $('.top_search').on('click',function(){

    $('.searchpage').addClass('active');
    $('.searchpage > div').css({display:'block'});
    $('.searchpage > ul').css({display:'block'});

   


});
})


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




