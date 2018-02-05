$(function() {
  $(".portfolio_btn").click(function(){
    var get_number = $(this).attr('data-number');
    console.log(get_number);
    localStorage.setItem("btn_number", get_number);
    var number = localStorage.getItem("btn_number");
    console.log(number);
  });
  $(".work-grid").hover(function(){
    $('.work-img',this).removeClass("hide");
    $('.work-img',this).addClass("show");
  }, function(){
    $('.work-img',this).addClass("hide");
    $('.work-img',this).removeClass("show");
  })
});
