$(function() {
  $(".portfolio_btn").click(function(){
    var get_number = $(this).attr('data-number');
    console.log(get_number);
    localStorage.setItem("btn_number", get_number);
    var number = localStorage.getItem("btn_number");
    console.log(number);
  });
  $('.work-grid').hover(function(){
    // $('.work-grid').addClass("expand");
    $('.show-on-hover',this).removeClass("hide");
    $('.show-on-hover',this).addClass("show");
  }, function(){
    // $('.work-grid').removeClass("expand");
    $('.show-on-hover',this).addClass("hide");
    $('.show-on-hover',this).removeClass("show");
  })
  // function close(element){
  //   $(element).attr('href', function() {
  //       return this.href + '#work';
  //   });
  // }
});
