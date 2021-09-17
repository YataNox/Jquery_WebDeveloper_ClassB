$(function(){
    var ev; // 이벤트 반복실행 저장 변수
    var e = function(){ // 반복실행할 함수 변수
        if(po <= -4200){
            po = n;
        }
        po -= n;
        $('#view').css({left:po});
        // 보여지는 이미지의 버튼의 색 변경
        $('.numm').css({'backgroundColor':'white'});
        $('.numm').eq(-(po/n)).css({'backgroundColor':'darkgray'});
    }
    var n = 600; // 이미지의 가로 크기, 이동할 한 칸의 크기
    var imgCount = $('li').last().index()-2;
    var stop = true; // 롤링 여부
    var po = $("#view").css("left"); // 현재 view이 보여주는 화면 값 (ex: 0px)
    po = po.substring(0, po.length-2); // view값의 px를 뺀 숫자 값만 취하기

    /* 좌로 한 칸 이동 */
    $('li').eq(0).click(function(){ 
        // 화면이 롤링 중 일 경우 롤링 멈춤 
        if(!stop){
            clearInterval(ev);
            $('li').eq(10).text("▶");
            stop = !stop;
        }
        // 보여지는 사진이 마지막 8번 이미지 일 경우 1번으로 갈 수 있게 조정
        if(po == 0){
            po = -n * imgCount;
        }
        // 한 칸 이동
        po = po + n;
        $('#view').css({left:po});
        // 멈추어 놨던 이미지 롤링 다시 실행
        if(stop){
            ev = setInterval(e,1000);
            $('li').eq(10).text("■");
            stop = !stop;
        }
    });
    /* 우로 한 칸 이동 */
    $('li').eq(9).click(function(){
        if(!stop){
            clearInterval(ev);
            $('li').eq(10).text("▶");
            stop = !stop;
        }

        if(po == -4200){
            po = n;
        }   
        po = po - n;
        $('#view').css({left:po});

        if(stop){
            ev = setInterval(e,1000);
            $('li').eq(10).text("■");
            stop = !stop;
        }
    });

    /* 숫자 버튼 입력 */
    $('.numm').click(function(){
        // 숫자 버튼의 인덱스 값을 받아 이동할 값 계산 후 값만 큼 이동
        var i = $(this).index();
        $('.numm').css({'backgroundColor':'white'});
        $(this).css({'backgroundColor':'darkgray'});

        po = (i-1) * -600;
        $('#view').css({left:po});
    });
    
    /* 롤링/중지 버튼 */
    $('li').eq(10).click(function(){
        // 롤링중지 상태일 때 롤링 실행
        if(stop){
            $(this).text("■");
            ev = setInterval(e,1000);
            stop = !stop;
        }
        else{ // 롤링중일 때 롤링 중지
            $(this).text("▶");
            clearInterval(ev);
            stop = !stop;
        }
    });
    $("li").eq(10).trigger("click");
});