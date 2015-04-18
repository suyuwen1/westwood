/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-04-16 15:10:19
 * @version $Id$
 */
$(function(){
	jxp_scroll_init();
})
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