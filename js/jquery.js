$(document).ready(function(){
	$('#hw').click(function(){
		$('#fadeInHelloWorld').fadeIn(2000);
	});
});
$(document).ready(function(){
    $("#img").click(function(){
        $("#img").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
});
