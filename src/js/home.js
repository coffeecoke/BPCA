$(".box-meau-ul li").click(function(){
    $(this).addClass("meauHover").siblings().removeClass("meauHover");
})
$(".img-logo").hover(function(){
  $(".logo-tip").toggleClass("on");
})
$('#roll').rollSlide({
  orientation: 'left',
  num: 2,
  v: 1500,
  space: 3000,
  isRoll: true
});
$('#roll2').rollSlide({
  orientation: 'left',
  num: 2,
  v: 1500,
  space: 3000,
  isRoll: true
});
$('.aside-title').txtscroll({
  'speed': 50
});