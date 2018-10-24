define(["jquery"],function($){
	function dataoutput(aaa){
		$(function(){
			// if(aaa){
				$.ajax({
					url:"../data/goods.json",
					success:function(data){
						var num =null;
						// alert(aaa);
						switch(aaa){
							case 'phone':
								num = data.phone;
								break;
							case 'compoter':
								num = data.compoter;
								break;
							case 'panel':
								num = data.panel;
								break;
							case 'furniture':
								num = data.furniture;
								break;
							case 'parits':
								num = data.parits;
								break;
							default:
								num = data.phone;

						}
						// alert(num);
						var bottominner = "";
						var j = num.length;

						// alert(num[0].img);
						for(var i = 1;i < j;i++){

							bottominner +=`<li><a href=""><p class = "img"><img src="${num[i].img}" alt=""></p>
									<p class = "title">${num[i].title}</p>
									<p class="conten">${num[i].content}</p>
									<i>${num[i].price}</i></a></li>`;

						}
						$(".hideload").find(".down-2").html(bottominner);
						var topnum = num[0].nav.length;
						var topinner = "";
						for(var k = 0; k < topnum;k++){
							topinner +=`<li><a href="">${num[0].nav[k]}</a></li>`;
						}
						$(".hideload").find(".down-1").html(topinner);
					}
				})
			// }
		})
		
	}
	return {
		dataoutput:dataoutput,
	}
})