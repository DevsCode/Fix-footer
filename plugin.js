var stickyTop=$('footer').offset().top;
$(window).on('scroll',function(){if($(window).scrollTop()>=stickyTop){$('.ftr_cta_blk').addClass('asdf');}else{$('.ftr_cta_blk').removeClass('asdf');}});
/*
*Example: https://www.rankingbyseo.com/
*/
