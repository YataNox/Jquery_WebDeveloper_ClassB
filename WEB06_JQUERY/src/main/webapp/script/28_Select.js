$(function(){
    $('#arrow').click(function(){
        $('#dropmenu').slideDown();
    });
    $('.dropdiv').click(function(){
        var text = $(this).text().trim();
        text = text.substring(0,3);
        /* var num = $(this).html();
        var blank = num.indexOf(' ');
        num  = num.substring(0, blank); */
        $("#num").text(text);
        $('#dropmenu').slideUp();
    });
});