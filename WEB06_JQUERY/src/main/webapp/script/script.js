$(function(){
    $('li').click(function(){
        var liIndex = $(this).index();
        var posX = ((liIndex)%3) * -600;
        if(liIndex < 3){
            var posY = 0;
        }
        else{
            var posY = -400;
        }
        $('#view').animate({left:posX, top:posY},300);
    });
});