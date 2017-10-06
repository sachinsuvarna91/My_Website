/*jslint browser: true*/
/*global $, jQuery, alert*/
$(".nav").localScroll({duration: 800});

 $(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             return false;
           }
         }
       });
     });

$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 600) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#ededed"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").css("background-color", "#ffffff"); // if not, change it back to transparent
        }
      });
    });

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var itemsToWrap=$('.testItem');
    $('.parentTest').remove();
    var carousel='<div id="myCarousel" class="carousel container slide hidden-lg hidden-md hidden-sm col-xs-12" data-ride="carousel"><div class="carousel-inner" role="listbox"></div>  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>    <span class="sr-only">Previous</span>  </a>  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>    <span class="sr-only">Next</span>  </a></div>';
    $(carousel).appendTo('.baseParent');
    var elementTowrap="";
    $.each($(itemsToWrap),function(index){
        var html=$(this).html();
        console.log(html);
        if(index==0)
            elementTowrap+='<div class="item active">'+$(this).html()+'</div>';
        else
            elementTowrap+='<div class="item">'+$(this).html()+'</div>';
    });
    $('.carousel-inner').append($(elementTowrap));
    $("#myCarousel").carousel("pause").removeData();
    $("#myCarousel").carousel();
}


$('#contact-form').submit(function(e){
      var name = document.getElementById(name);
      var email = document.getElementById(_replyto);
      var message = document.getElementById(message);
      var contact = document.getElementById(contact);
      if(!name.value || !email.value || !message.value || !contact.value){
       alert('Please fill in all the details')
       }else{
           $.ajax({
    url: "https://formspree.io/sachin.suvarna91@gmail.com", 
    method: "POST",
    data: {
                name, email, contact, message
            },
    dataType: "json"
    success: function() {
                alert("Thanks! We'll get back to you soon.");}
});
       e.preventDefault()
           $this.get(0).reset()
           alert('Message sent')
       }

})























