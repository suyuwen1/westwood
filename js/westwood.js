/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-16 15:10:19
 * @version $Id$
 */
 $(function(){
 	all_scroll_init();
 	yuyan_sel ();
 	scroll_weixin();
 })
// 图片水平轮播 开始
var s_t='';
var imgs=$(".jxp-con img");
var jxp_con_w=$(".jxp-con").width();
function jxp_scroll_init(){
	$(".jxp-con").css({'width':(jxp_con_w*2)});
	for (var i = 0; i < imgs.length; i++) {
		$(".jxp-con").append(imgs[i]['outerHTML']);
	}
	jxp_scroll_s();
	jxp_scroll_hover();
}
function jxp_scroll_s(){
	jxp_scroll_e();
	s_t=setInterval("jxp_scroll()",20);
}
function jxp_scroll_e(){
	clearInterval(s_t);
	s_t='';
}
function jxp_scroll(){
	var l=$(".jxp-con").position().left;
	var a=0;
	if (Math.abs(l)>=jxp_con_w) {
		a='0px';
	} else{
		a=(l-1)+'px';
	};
	$(".jxp-con").css('left', a);
}
function jxp_scroll_hover(){
	$(".jxp-w").hover(function() {
		jxp_scroll_e();
	}, function() {
		jxp_scroll_s();
	});
}
// 图片水平轮播 结束
// 向上滚动 开始
function all_scroll_init(){
	var n=0;
	all_scroll_fixed ();
	all_scroll_up_button();
	all_scroll_up();

	$(window).resize(function(event) {
		if(n%2==0){
		all_scroll_fixed ();
		// console.log("1");
		}
		n++;
	});
}
function all_scroll_fixed () {
	var a;
	var doc=$(document).width();
	if (doc>1180) {
		a=80;
	}else if(doc>1080 && doc<=1180){
		a=30;
	}else{
		a=-10;
	}
	$(".scroll-list").css({"right":((doc-1000)/2-a),"bottom":300,"position":"fixed"});
	// console.log(doc);
	// var list=$(".scroll-list").offset();
	// $(".scroll-list").css({"left":list.left,"position":"fixed"});
	
}
function all_scroll_up(){
	var t;
	$(window).scroll(function(){
		t=$(this).scrollTop();
		if (t>=100) {
			$(".s-up").css("display",'block');
		}else{
			$(".s-up").hide();
		}
	})
}
function all_scroll_up_button(){
	$(".s-up").click(function(event) {
		// console.log('1');
		$('html,body').animate({scrollTop:0}, 'fast');
	});
}
// 向上滚动 结束

//语言选择 开始
function yuyan_sel () {
	$("#yuyan-sel").hover(function() {
		$("#bars-list .group .yuyan").addClass('yuyan-sel').show();
	}, function() {
		$("#bars-list .group .yuyan").removeClass('yuyan-sel').hide();
	});
}
//语言选择 结束

//微信弹窗 开始
function scroll_weixin(){
	$(document).click(function(event) {
		var t=$(event.target);
		if (t.closest('.scroll-weixin').length==1) {
			$('#tc-weixin').show("fast");
		}else if (t.closest('.am-close').length==1) {
			$('#tc-weixin').hide("fast");
		}else if (t.closest('#tc-weixin').length==0 && t.closest('.scroll-weixin').length==0) {
			$('#tc-weixin').hide("fast");
		}
	});
}
//微信弹窗 结束