// JavaScript Document
$(function(){
	
	var bannerTime=setInterval(function(){$(".scorll").animate({"margin-left":"-210px"},1000,function(){
		$(".scorll div:first").clone().appendTo(".scorll")
		$(".scorll div:first").remove()
		$(".scorll").css("margin-left","0")
	})},5000)
	$(".scorll").mouseover(function(){//当鼠标划过时改变图片和按钮背景颜色
		clearInterval(bannerTime)//停止定时器（切换）
	})
	$(".scorll").mouseout(function(){//当鼠标离开后重新调用定时器
		bannerTime=setInterval(function(){$(".scorll").animate({"margin-left":"-210px"},1000,function(){
		$(".scorll div:first").clone().appendTo(".scorll")
		$(".scorll div:first").remove()
		$(".scorll").css("margin-left","0")
	})},5000)
	})
})
/*
$(function(){
	var page=1;
	$(".up").click(function(){
		if(!$(".videoMove").is(":animated")){//判断是否处于动画状态，返回布尔值
			if(page==4){//等于4时，返回第一页
				page=1
				$(".newtab2").animate({"margin-left":"0"},500)//返回第一页时，margin-left为0
			}else{//否则每次向左移592px
				$(".newtab2").animate({"margin-left":"-=287px"},500)
				page++//页数增加
			}
		}//and animted
	})//next 按钮
	$(".down").click(function(){
		if(!$(".newtab2").is(":animated")){
			if(page==1){
				page=4
				$(".newtab2").animate({"margin-left":"-861px"},500)
			}else{
				$(".newtab2").animate({"margin-left":"+=287px"},500)
				page--
			}
		}
	})//pre 按钮
	
})
*/
$(function(){
	$("#nav li:has(div)").hover(function(){
		$(this).children("div").stop(true,true).slideDown(300)
		},function(){
		$(this).children("div").stop(true,true).slideUp(1)
		})
})
$(function(){
	$("#nav li").hover(function(){
		$(this).addClass("a8")
		},function(){
		$(this).removeClass("a8")
		})
})

$(function(){
	
	var bannerTime=setInterval(function(){$(".newtab2").animate({"opacity":"0.5"},500,function(){
		$(".newtab2 dl:first").clone().appendTo(".newtab2")
		$(".newtab2 dl:first").remove()
		$(".newtab2").animate({"opacity":"1"},800)
	})},4000)
	$(".newtab2").mouseover(function(){//当鼠标划过时改变图片和按钮背景颜色
		clearInterval(bannerTime)//停止定时器（切换）
	})
	$(".newtab2").mouseout(function(){//当鼠标离开后重新调用定时器
		bannerTime=setInterval(function(){$(".newtab2").animate({"opacity":"0.5"},500,function(){
		$(".newtab2 dl:first").clone().appendTo(".newtab2")
		$(".newtab2 dl:first").remove()
		$(".newtab2").animate({"opacity":"1"},800)
	})},4000)
	})
})