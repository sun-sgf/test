define(['jquery','range'],function($,range){
	function login(){
		//父节点
		var oLogin = $(".hiddenWindow").find(".contLogin");
		//需要点击的父节点
		var oli =$(oLogin).find(".but");
		//选项卡的父节点
		// var oCard = $(oLogin).find(".card");
		$(oli).find("li").click(function(){
			$(oLogin).find(".card").find(".cardq").css("display","none");
			$(oLogin).find(".card").find(".cardq").eq($(this).index()).css("display","block");
		})

		//表单验证（登陆）
		var oForm = $(oLogin).find(".card1");
		//提示信息标签
		var oPrompt = $(oForm).find(".prompt");
		// alert(oPrompt.attr("class"));
		$(oForm).find("input").blur(function(){

			var oValue = $(this).val().replace(/ /ig, "");
			var oPhone = oValue;
			// alert(oValue);
			if(!oValue){
				$(oPrompt).html("账号密码错误请重新输入");
				// $(this).css()
			}
		})

		//验证框在页面上居中
		$(function(){
			$(window).scroll(function(){
				var heightY = $(window).scrollTop();
				var Y = ($(window).height() - $('.hiddenWindow').find(".login").height() )/ 2;
				var X = ($(window).width() - $('.hiddenWindow').find(".login").width() )/ 2;
				var MY = range.range(heightY,$(".hiddenWindow").height() - $(window).height(),0);
				// alert($(".hiddenWindow").height() - $(window).height());
				// alert($(window).height());
				$('.hiddenWindow').find(".login").css({
					top:MY + Y,
					left:X,
				})
			})
		})
		//当点击按钮时
		$(".outline").find(".header").find(".top").find(".right").find(".login").click(function(){
			$(".hiddenWindow").css("display","block");
			// alert(1);
		})
		//当点击按钮时关闭窗口
		var oClose = $(".hiddenWindow").find(".top").find('.close');
		$(oClose).click(function(){
			$(".hiddenWindow").css("display","none");
			// alert(1);
		})

		//注册页面
		var oRegister = $(".contentRegister").find(".center");
		$(oRegister).find("input").blur(function(){
			var oValue = $(this).val().replace(/ /ig, "");
			var oData = oValue;
			// alert(oValue);
			/*if(!oValue){
				$(oRegister).find(".phone").append($(`<p>但事实上所所所所所所所</p>`));

				// $(this).css()
			}*/
		})

		//将数据传递给php页面
		$(oRegister).find(".btn").click(function(){
			// var ophone =$(oRegister).find("#inphone").val();
			// var opassword =$(oRegister).find("#inpassword").val();
			var str = `ophone =${$(oRegister).find("#inphone").val()}&opassword =${$(oRegister).find("#inpassword").val()}`;
		
			$.ajax({
				method:"post",
				url:"../register.php?type=register",
				data:str,
				success:function(data){
					alert(data);
				},
				error:function(msg){
					alert(msg);
				}
			})
		});
	}	
	
	return{
		login:login,
	}
})