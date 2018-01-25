$(function() {
  $(".portfolio_btn").click(function(){
    var get_number = $(this).attr('id');
    console.log(get_number);
    localStorage.setItem("btn_number", get_number);
    var number = localStorage.getItem("btn_number");
    console.log(number);
  });
});
