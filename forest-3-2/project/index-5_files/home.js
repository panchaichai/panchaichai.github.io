$(document).ready(function () {

    //MenuStyle();
})
function MenuStyle() {
    if ($.browser.msie) {
        var iever = $.browser.version
    }
    //ie6��ʼ���?��ʽ
    if (iever == "6.0") {
        $("input[type='button']").addClass("btn");
        $("input[type='submit']").addClass("btn");
        $("input[type='reset']").addClass("btn");
        $("input[type='text']").addClass("inputbg");
        $("textarea").addClass("inputbg");
        $("input[type='password']").addClass("inputbg");
        $("input[type='text']").focus(function () {
            $(this).addClass('inputfocus');
        }).blur(function () {
                $(this).removeClass('inputfocus');
            });
        $("textarea").focus(function () {
            $(this).addClass('inputfocus');
        }).blur(function () {
                $(this).removeClass('inputfocus');
            });
        $("input[type='password']").focus(function () {
            $(this).addClass('inputfocus');
        }).blur(function () {
                $(this).removeClass('inputfocus');
            });

        $(".triptop li").hover(function () {
            $(this).addClass("thisli");
        }, function () {
            $(this).removeClass("thisli");
        });
        $(".triplist li").hover(function () {
            $(this).addClass("thisli");
        }, function () {
            $(this).removeClass("thisli");
        });
        $(".hotelist tr").hover(function () {
            $(this).addClass("thistr");
        }, function () {
            $(this).removeClass("thistr");
        });

        $("#tripshow .mbox img").each(function () {
            if ($(this).width() > 690) {
                $(this).css({"width": "690px", "height": "auto"});
            }
        })

    }

    $("span[id^=tips]").html("<img src='/style/images/tips.png' align='absmiddle' alt='' />&nbsp;").addClass("tips").hover(function () {
        $(this).css("z-index", "98").append("<div class=tips1>��</div><div class=tips2>��</div><p></p>");
        $(this).find("p").html($(this).attr("help"));
    }, function () {
        $(this).css("z-index", "0");
        $(this).html("<img src='/style/images/tips.png' alt='' />&nbsp;");
    });

    var navIndex = 0;
    switch ($("#page_nav_index").attr("title")) {
        case ""://
            navIndex = 1;
            break;
        case "ѧԺ�ſ�":
            navIndex = 2;
            break;
        case "ʦ�ʶ���":
            navIndex = 3;
            break;
        case "topic":
            navIndex = 4;
            break;
        case "��ѧ�о�":
            navIndex = 5;
            break;
        case "news":
            navIndex = 6;
            break;
        case "hotel":
            navIndex = 7;
            break;
        case "ticket":
            navIndex = 8;
            break;
        case "visa":
            navIndex = 9;
            break;
        default:
            navIndex = 0;
            break;
    }

    $(".topmenu a:first").addClass("thisclass");
    $(".topmenu a").mouseover(function () {

        var l = $(this).offset().left - $(".topmenu").offset().left;
        $(".topmenu p").stop(true).animate({left: l}, {easing: 'easeOutBack'});
        //alert($(this).offset().left+"  "+$(".topmenu").offset().left)
        $(".topmenu a").eq(navIndex).removeClass("thisclass");
        $(this).addClass("thisclass");
    }).mouseleave(function () {
            var l = $(".topmenu a").eq(navIndex).offset().left - $(".topmenu").offset().left;
            $(".topmenu p").stop(true).animate({left: l}, {easing: 'easeOutBack'});
            $(this).removeClass("thisclass");
            $(".topmenu a").eq(navIndex).addClass("thisclass");
        });
    $(".topmenu a").removeClass("thisclass").eq(navIndex).addClass("thisclass");
    if (navIndex > 0) {
        var l = $(".topmenu a").eq(navIndex).offset().left - $(".topmenu").offset().left;
        $(".topmenu p").css({left: l});
    }


    //table
    $(".simpleT tr:even").addClass("even");
    $(".simpleT tr").hover(function () {
        $(this).addClass("thistr");
    }, function () {
        $(this).removeClass("thistr");
    })
    $(".simpleT tr td:last-child").css("border-right", "none");
    $(".simpleT th td:last-child").css("border-right", "none");

    $(".hotelist li:even").addClass("evenli");
    $(".triplist li:even").addClass("evenli");


    $("#tripshow .mbox .titcon").append("<a class='moreR'>ȫ��</a>");
    $("#tripshow .mbox .titcon a.moreR").hover(function () {
        $("#tripshow .mbox .cont dl").attr("style", "")
    })
}
jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });
