// console.log("加载完成index");

// //配置路径

// require.config({
// 	paths:{

// 		"jquery":"jquery-1.11.3",
// 		"jquery-cookie":"jquery.cookie",
// 		"dataMore":"dataMore",
// 		"slide":"slide",
// 		"downmove":"downmove",
// 		"Menu":"Menu",
// 		"dataoutput":"dataoutput",
// 		// "lineTop":"lineTop",
// 		//抛物线函数，不遵从AMD
// 		"parabola":"parabola",
// 		//设置模块之间的依赖关系
// 		shim:{
// 			"jquery-cookie":["jquery"],
// 			"lineTop":["dataMore"],
// 			//定义不遵从AMD规范的js文件
// 			"parabola":{
// 				exports:"_"
// 			}
// 		}
// 	}
// })

define(['jquery'],function(){
	function list(){
		$.ajax({
			url:"../data/list.json",
			success:function(res){
				//模块1

				var list1 = res.goods.length;
				var list1inner = "";
				for(var i = 0; i < list1;i++){
					list1inner += `<li>
							<div class="div1">
								<div class="img">
									<a href="">
										
										<img src="${res.goods[i].img}" alt="">
									</a>
									
								</div>
								<p class="pTitle">
									<a href="">${res.goods[i].title}</a>
								</p>
								<p class="pCont">
									<a href="">${res.goods[i].content}</a>
								</p>
								<i class="price">
									${res.goods[i].price}
								</i>
								<div class="last">
									<a href="" class = "aLeft">立即预约</a>
									<a href="">1000预约</a>
								</div>
							</div>
						</li>`;
				}
				$(".content1").find(".ulM").html(list1inner);
			}
		})
	}
	return {
		list:list,
	}
})

// require(['slide','downmove','lineTop',"Menu","dataoutput","dataMore","listA"],function(slide,downmove,lineTop,Menu,dataoutput,dataMore){
// 	slide.slide();
// 	downmove.downmove();
// 	// lineTop.lineTop();
// 	Menu.Menu();
// 	dataoutput.dataoutput();
// 	dataMore.dataMore();
// })