define(['jquery'],function($){
	function dataMore(){
		// $(function(){
			$.ajax({
				url:"../data/goodMore.json",
				async:true,
				success:function(res){
					//华为精品下的图片
					var photo = res.photo.length;
					var photoinner = "";
					for(var i = 0; i < res.photo.length;i++){
						photoinner += `<li class = "lineTop"><div class = "deg"></div><a href="details.html"><img src="${res.photo[i]}" alt=""></a></li>`;
					}
					$(".content").find(".ulimg").html(photoinner);
					// //商品
					var reference = res.reference.length;
					var referenceinner = "";
					for(var i = 0; i < reference;i++){
						referenceinner +=`<li>
						<a href="details.html">
							<div>
								<b>${res.reference[i].title}</b>
								<b>${res.reference[i].title2}</b>
								<p>${res.reference[i].content}</p>
								<i>${res.reference[i].price}</i>
							</div>
							<p><img src="${res.reference[i].img}" alt=""></p>
						</a>
					</li>`;
					}
					$(".content").find(".reference").html(referenceinner);
					//模块1

					var model1 = res.model1.length;
					var model1inner = "";
					for(var i = 0; i < res.model1.length;i++){
						model1inner += `<li class = "${res.model1[i].className}">
							<a href="details.html">
								<div>
									<p class = "${res.model1[i].idName}">${res.model1[i].title}</p>
									<i>${res.model1[i].price}</i>
								</div>
								<img src="${res.model1[i].img}" alt="">
							</a>
						</li>`;
					}
					$(".content").find(".oul").html(model1inner);
					//模块3
					var model3 = res.model3.length;
					var model3inner = "";
					for(var i = 0; i < res.model3.length;i++){
						model3inner += `<li class = "lineTop ${res.model3[i].className}">
							<a href="">
								<img src="${res.model3[i].img}" alt="">
								<div>
									<b>${res.model3[i].title}</b>
									<p>${res.model3[i].content}</p>
									<i>${res.model3[i].price}</i>
								</div>
							</a>
						</li>`;
					}
					$(".content").find(".ul3").html(model3inner);
					//模块4
					var model4 = res.model4.length;
					var model4inner = "";
					for(var i = 0; i < res.model4.length;i++){
						model4inner += `<li class = "${res.model4[i].className}">
							<a href="">
								<div>
									<p class = "${res.model4[i].idName}">${res.model4[i].title}</p>
									<i>${res.model4[i].price}</i>
								</div>
								<img src="${res.model4[i].img}" alt="">
							</a>
						</li>`;
					}
					$(".content").find(".ul4").html(model4inner);
					//模块5
					var model5 = res.model5.length;
					var model5inner = "";
					for(var i = 0; i < res.model5.length;i++){
						model5inner += `<li class = "${res.model5[i].className}">
							<a href="">
								<div>
									<p class = "${res.model5[i].idName}">${res.model5[i].title}</p>
									<i>${res.model5[i].price}</i>
								</div>
								<img src="${res.model5[i].img}" alt="">
							</a>
						</li>`;
					}
					$(".content").find(".ul5").html(model5inner);
					//模块6
					var model6 = res.model6.length;
					var model6inner = "";
					for(var i = 0; i < res.model6.length;i++){
						model6inner += `<li class = "${res.model6[i].className}">
							<a href="">
								<div>
									<p class = "${res.model6[i].idName}">${res.model6[i].title}</p>
									<i>${res.model6[i].price}</i>
								</div>
								<img src="${res.model6[i].img}" alt="">
							</a>
						</li>`;
					}
					$(".content").find(".ul6").html(model6inner);
					//滚动条
					var line1 = res.line1.length;
					var line1inner = "";
					for(var i = 0; i < res.line1.length;i++){
						line1inner += `<li class = "lineTop">
							<a href="">
								<img src="${res.line1[i].img}" alt="">
								<div>
									<b>${res.line1[i].title}</b>
									<p>${res.line1[i].content}</p>
									<i>${res.line1[i].pirce}</i>
								</div>
							</a>
						</li>`;
					}
					$(".content").find(".line1").html(line1inner);
					//滚动条
					var line2 = res.line2.length;
					var line2inner = "";
					for(var i = 0; i < res.line2.length;i++){
						line2inner += `<li class = "lineTop">
							<a href="">
								<img src="${res.line2[i].img}" alt="">
								<div>
									<b>${res.line2[i].title}</b>
									<p>${res.line2[i].content}</p>
									<i>${res.line2[i].price}</i>
								</div>
							</a>
						</li>`;
					}
					$(".content").find(".line2").html(line2inner);
					//滚动条
					var line3 = res.line3.length;
					var line3inner = "";
					for(var i = 0; i < res.line3.length;i++){
						line3inner += `<li class = "lineTop">
							<a href="">
								<img src="${res.line3[i].img}" alt="">
								<div>
									<b>${res.line3[i].title}</b>
									<p>${res.line3[i].content}</p>
									<i>${res.line3[i].price}</i>
								</div>
							</a>
						</li>`;
					}
					$(".content").find(".line3").html(line3inner);
				},
				error:function(msg){
					alert(msg);
				}
			})
		// })
		
	}
	return {
		dataMore:dataMore,
	}
})
