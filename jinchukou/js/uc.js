window.hrsUcenter = window.hrsUcenter || {};
window.hrsUcenter = {
	init:function(){
		this.navEvent();
		this.newResume();
		this.myResume();
		this.scrollEvent();
	},
	scrollEvent: function(e){
		$(window).scroll(function(){
			if($(window).scrollTop() >= 122){
				$('#hrs_side').addClass('topFixed');
			}else{
				$('#hrs_side').removeClass('topFixed');
			}
		})
	},
	navEvent: function(){
		$('.hrs_tabVertical li').live({
			mouseenter: function(){
				if(!$(this).hasClass('hrs_tabCurrent')){
					$(this).removeClass('leave').addClass('hover');
				}
			},
			mouseleave: function(){
				if(!$(this).hasClass('hrs_tabCurrent')){
					$(this).removeClass('hover').addClass('leave');
				}
			}
		})
		/*
		$('.hrs_tabVertical li a').live('click',function(e){
			var e = e || window.event,
				$parent = $(this).parent();
			e.preventDefault();
			if(!$parent.hasClass('hrs_tabCurrent')){
				var url = $(this).attr('to');
				$('#hrs_resumeOuter').load(url,function(){
					$parent.addClass('hrs_tabCurrent');
					$parent.siblings('.hrs_tabCurrent').removeClass('hrs_tabCurrent hover').addClass('leave');
				});
			}
		})*/
	},
	newResume: function(){
		$('.hrs_tab2 li').live('click',function(){
			var to = $(this).find('a').attr('to');
			if(!$(this).hasClass('hrs_tabCurrent')){
				$(this).siblings('.hrs_tabCurrent').removeClass('hrs_tabCurrent');
				$(this).addClass('hrs_tabCurrent');
				$('#'+to).siblings('.hrs_tabContent').hide();
				$('#'+to).show();
			}
		})
	},
	myResume: function(){
		var $myResume = $('#hrs_myResumeList'),
			$delBtn = $myResume.find('.hrs_myResumeDel'),
			$previewBtn = $myResume.find('.hrs_myResumePreview'),
			$editBtn = $myResume.find('.hrs_myResumeEdit');
		$delBtn.live('click',function(e){
			var $this = $(this);
			var e = e || window.event;
			e.preventDefault();
			var confirmContent = '<p class="sec_warning"><span>您确认删除该简历吗？</span></p>';
			var okCallback = function(plugin){
				plugin.settings.position.trigger.closest('tr').remove();
			};
			var delDialog = new BC_Dialog({width:'auto', content:confirmContent, title:'', need_close:false, position:{'trigger':$this}, okCallback:okCallback});
			delDialog.open();
		})
		$editBtn.live('click',function(e){
			var e = e || window.event;
			e.preventDefault();
			$('#hrs_resumeOuter').load('uc-buildResume.html');
		})
	}
}
window.hrsUcenter.init();

/* by dayee */
function changeLanguage(type){
    var location = window.location +"";
    var last = location.substring(location.length-1, location.length) ;
    if(last=="#"){
        location = location.substring(0, location.length-1) ;
    }
    var hasQues = location.indexOf("?")>0 ? true : false;
    if(type == 1){
        if(location.indexOf("request_locale=en")>0){
            location = location.replace("request_locale=en","request_locale=zh_CN");
            window.location =  location ;
        }else{
            if(hasQues){
                location += "&request_locale=zh_CN";
            }else{
                location += "?request_locale=zh_CN";
            }
            window.location =  location;
        }
    }else{
        if(location.indexOf("request_locale=zh_CN")>0){
            location = location.replace("request_locale=zh_CN","request_locale=en");
            window.location =  location ;
        }else{
            if(hasQues){
                location += "&request_locale=en";
            }else{
                location += "?request_locale=en";
            }
            window.location =  location;
        }
    }
}


//导航动画
$(".nav").menu();

//调用个人中心下拉插件
$(".pull-down-menu").pullDownMenu({
    "holder":".holder",
    "eventType":"click",
    "toggleClass":"up"
});