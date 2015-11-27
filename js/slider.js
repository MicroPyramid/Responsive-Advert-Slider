/*
 *  Plugin Name: Responsive Advert Slider v1.0
 *  Author: Nazneen Shaik
 *  Date: 2015.11
 *  Description: Responsive jquery advert slider.
 */
var advert_wid=$('.slider_container').width();
	$('.img_wrap').css('width',advert_wid+'px')
	number_of_slides=$('.advert_slider .img_wrap').length
	$('.advert_slider').css('width',((advert_wid*number_of_slides))+'px')

function slide_right(){
		slider_wid_int=parseInt($('.advert_slider').css('width').slice(0,-2));
		left_wid_int=parseInt($('.advert_slider').css('left').slice(0,-2))
	if(slider_wid_int+left_wid_int-advert_wid>advert_wid){
		var animate_left='-'+(advert_wid)
		$('.advert_slider').animate({left:'+='+animate_left},500);
		$('.links_icon_set ul li.active').removeClass('active').next().addClass('active');
	}
	else{
		$('.advert_slider').animate({left:'0px'},1000);
		$('.links_icon_set ul li').first().addClass('active').siblings().removeClass('active');
	}
}
setInterval(function(){
	slide_right()
}, 4000);

$('.links_icon_set ul li .item_each').click(function(e){
	var left_value=$(this).parent('li').index()*advert_wid
	$('.advert_slider').animate({left:'-'+left_value+'px'}, 400)
	$(this).parent('li').addClass('active').siblings().removeClass('active')
})
