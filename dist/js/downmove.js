
define(["jquery"],function($){
	function downmove(){
			var a = null;
			 $(".downtop").find(".download").hover(function(){
			 	$(this).find(".downnode").css("display","block").css("z-index","2");
			 	$(this).css("border","1px solid #ccc");
			 	$(this).find(".tag").html("&#xe60d;");
			 	
			 });

			 $(".downtop").find(".download").mouseleave(function(){
			 	$(this).find(".downnode").css("display","none");
			 	$(this).css("border","none");
			 	$(this).parent().find(".tag").html("&#xe60c;");
			 	
			 });

			
	}
	return{
		downmove:downmove,
	}
})