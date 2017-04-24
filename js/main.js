$(function(){
	$('#ctr').find('span').bind('click',function(){
		$('#ctr').find('span').removeClass('on');
		$(this).addClass('on');
        $('#tab_ctr').children('li').css('display','none');
        $('#tab_ctr').children('li').eq($(this).index()).css('display','block')
	})
})