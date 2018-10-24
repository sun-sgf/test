console.log("加载完成index");

//配置路径

require.config({
	paths:{

		"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"dataMore":"dataMore",
		"slide":"slide",
		"downmove":"downmove",
		"Menu":"Menu",
		"dataoutput":"dataoutput",
		"list":"list",
		"range":"range",
		"drag":"drag",
		"login":"login",
		// "lineTop":"lineTop",
		//抛物线函数，不遵从AMD
		"parabola":"parabola",
		//设置模块之间的依赖关系
		shim:{
			"jquery-cookie":["jquery"],
			"lineTop":["dataMore"],
			//定义不遵从AMD规范的js文件
			"parabola":{
				exports:"_"
			}
		}
	}
})


/*define(["drag", "jquery"], function(drag, $){

	function main(){

		var odrag= $("#dragParent").find(".drag"); 
		//2、让蓝色的div可以被拖拽
		drag.drag(odrag);


		//1、给按钮添加点击，当点击按钮的时候，可以将div1显示出来
		// oBtn.onclick = function(){
		// 	oDiv1.style.display = 'block';
		// 	scale.scale(oDiv1, oDiv2);
		// }
	}
	return {
		main: main
	}
})*/

require(['login','slide','downmove','lineTop',"Menu","dataoutput","dataMore","list",'drag'],function(login,slide,downmove,lineTop,Menu,dataoutput,dataMore,list,drag){
	login.login();
	slide.slide();
	downmove.downmove();
	// lineTop.lineTop();
	Menu.Menu();
	dataoutput.dataoutput();
	dataMore.dataMore();
	list.list();
	drag.drag();
})