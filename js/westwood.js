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
	all_scroll_fixed ();
	all_scroll_up_button();
}
function all_scroll_fixed () {
	var list=$(".scroll-list").offset();
	$(".scroll-list").css({"left":list.left,"position":"fixed"});
	all_scroll_up();
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
	$(".scroll-list .am-icon-weixin").click(function(event) {
		$('#your-modal').modal();
	});
}
//微信弹窗 结束