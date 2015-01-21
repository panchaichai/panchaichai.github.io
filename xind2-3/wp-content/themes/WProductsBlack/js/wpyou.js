// SubNavigation
$(function() {
	$(".navi li").hover(function(){
		$(this).find('ul:first').show("fast").css({visibility: "visible",display: "block"});
	},function(){
		$(this).find('ul:first').hide("fast").css({visibility: "hidden"});
	});
});
//Homepage Tabs
$(function(){
    var $title = $(".news h2 span");
    var $content = $(".news ul");
    $title.mousemove(function(){
        var index = $title.index($(this));
		$(this).addClass("mon").siblings().removeClass("mon");
        $content.hide();
        $($content.get(index)).show();
        return false;
    });
});
// Menu First li nb
$(function() {
	$(".navi li:first").addClass("nl");
	$(".footpage li:first").addClass("nb");
});
// SearchForm
$(document).ready(function(){				   
	$('.searchInput').focus(
		function() {
			if($(this).val() == '输入关键字') {
				$(this).val('').css({color:"#222"});
			}
		}
	).blur(
		function(){
			if($(this).val() == '') {
				$(this).val('输入关键字').css({color:"#777"});
			}
		}
	);
});
// Slideshow
$(function(){
	var index = 0;
	$("#operate span:first").addClass("hov");
	$("#operate span").mouseover(function(){
	  index  =  $("#operate span").index(this);
	  showImg(index);
	});	
	
	$('#slideshow').hover(function(){
			if(MyTime){
			   clearInterval(MyTime);
			}
	},function(){
			MyTime = setInterval(function(){
			  showImg(index)
			  index++;
			  if(index==5){index=0;}
			} , 6000);
	});
	
	var MyTime = setInterval(function(){
	  showImg(index)
	  index++;
	  if(index==5){index=0;}
	} , 6000);
})
function showImg(i){
	$("#showimg img")
	  .eq(i).stop(true,true).fadeIn(1000)
	  .parent().siblings().find("img").hide();
	$("#msg li")
	  .eq(i).stop(true,true).fadeIn(1000)
	  .siblings().hide();
	$("#operate span")
	  .eq(i).addClass("hov")
	  .siblings().removeClass("hov");
}