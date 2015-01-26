$.fn.slider = function(){
	var $slider = $(this),
		$list = $slider.find('li');
	var sWidth = $slider.width(); 
	var len = $list.length; 
	var index = 0;
	var picTimer;
	
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$slider.append(btn);
	$slider.find(".btnBg").css("opacity",0.5);

	$(".btn span",$slider).css("opacity",0.4).mouseenter(function() {
		index = $(".btn span",$slider).index(this);
		showPics(index);
	}).eq(0).trigger("mouseenter");

	$(".preNext",$slider).css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});

	$(".pre",$slider).click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	$(".next",$slider).click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	$("ul",$slider).css("width",sWidth * (len));
	
	$slider.hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},3000);
	}).trigger('mouseleave');
	
	function showPics(index) { 
		var nowLeft = -index*sWidth; 
		$("ul",$slider).stop(true,false).animate({"left":nowLeft},300); 
		$(".btn span",$slider).stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); 
	}
}