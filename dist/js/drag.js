define(["range","jquery"], function(range,$){
	function drag(){
		var oGass = $("#dragParent").find(".glass");
		// alert(odragParent.size());
		var offsetY = 0;
		var offsetX = 0;
		// var a = $(".leftD").find(".imgP");
		$(".leftD").find(".imgP").hover(function(ev){
			//计算鼠标的位置 
			//跟随效果
			$(this).mousemove(function(ev){
				// alert($(oGass).find("#glass").size());
				//最大距离
				var M = range.range(ev.pageY - 200,200,0);
				var S = range.range(ev.pageX - 200,200,0);
				//

				$(this).find(".drag").css({
					top : M,
					left : S,
				})
				
				$(oGass).find("#glassImg").css({
					top :-2*M ,
					left :-2*S,
					
				})
		
				$(this).find(".drag").css("display","block");
				$(oGass).css("display","block");
			})
			
			
		},function(){
			$(this).off('mousemove');
			$(this).find(".drag").css("display","none").css("left","0").css("top","0");
			$(oGass).css("display","none");

		})

		//滑动变图片
		var Odiv = $(".leftD").find(".ulP");
		// alert(oGass);
		var Oimg = $(".leftD").find(".imgP");
		$(Odiv).find("li").hover(function(){
			// alert($(".gass").find("img").size());
			//小图片
			$(Oimg).find("img").css("display","none");
			//大图片
			$(".glass").find("img").attr("id"," ");
			$(".glass").find("img").css("display","none");
			//小图片变化
			$(Oimg).find("img").eq($(this).index()).css("display","block");
			$(".glass").find("img").eq($(this).index()).css("display","block").attr("id","glassImg");
		})
		//放大的图片
		
	}
	return {
		drag: drag
	}
})