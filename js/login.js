
let num=0;
$('.checkbox > div >input').on('click',function(){
    if(num <=0 ){
        ++num;
        $('.checkbox > div >input').css({backgroundColor:'#fffc00'})
    }
    else{
        --num;
        $('.checkbox > div >input').css({backgroundColor:'#3d3d3d'})
    }

})

$('.submit').on('click',function(){
    location.href = 'main.html';
});


$('footer').load('inc.html footer > div');
