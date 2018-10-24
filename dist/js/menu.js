define(['jquery',"dataoutput"],function($,dataoutput){
	function Menu(){
		$('.nav-ul').find(".downMenu").hover(function(){
			var aaa =$(this).attr('id');
			dataoutput.dataoutput($(this).attr('id'));
			$(".hideload").stop().animate({height:260},2000).css({"display":"block","z-index":2});
		},function(){
			$(".hideload").stop().animate({height:0},2000).css("display","none");
		})
		$(".hideload").hover(function(){
			$(".hideload").stop().animate({height:260},2000).css({"display":"block","z-index":2});
		},function(){
			$(".hideload").stop().animate({height:0},2000).css("display","none");
		})
	}
	
	return {
		Menu:Menu,
	}
})