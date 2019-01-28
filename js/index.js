//smoooth scroll
 function smoothScroll(e){
    e.preventDefault();
// $()outside to capture the dom element
const target = $($(this).attr('href'));
$('html,body').animate({
  scrollTop:target.offset().top
},700,function() {
// Callback after animation
// Must change focus!
target.focus();
if (target.is(":focus")) { // Checking if the target was focused
  return false;
} else {
target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
target.focus(); // Set focus again
};
});
}
$("#navbarTogglerDemo02 a").on('click',smoothScroll);
$(".navbar-brand a").on('click',smoothScroll);


//counting code

var a = 0;
            $(window).scroll(function() {
                var oTop = $('#counter').offset().top - window.innerHeight;
                if (a == 0 && $(window).scrollTop() > oTop) {
                    $('.counter-value').each(function() {
                        var $this = $(this),
                        countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
            //alert('finished');
        }
    });
                    });
                    a = 1;
                }
            });
var check = function() {
  if (document.getElementById('psd').value ==
    document.getElementById('cnfpsd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not matching';
  }
}
var loginResponse = function(){
    var data = JSON.parse(this.response);
    if((data.response == '200_1') || (data.response == 'Already logged in.')){
        window.location.href = 'http://register.zealicon.in/campusambassador';
    }
}
var signupResponse = function(){
    var data = JSON.parse(this.response);
    if(data.response == 'user created'){
        window.location.href = 'http://register.zealicon.in/login';
    }
    console.log(data);
}
var loginSubmit = function(){
    var data =  JSON.stringify({username:document.getElementById('loginUsername').value,password:document.getElementById('loginPassword').value,token:'zealog476'});
    var http = new XMLHttpRequest();
    http.withCredentials = true;
    http.open('POST', 'http://register.zealicon.in/login', true);
    http.addEventListener('load',loginResponse);
    http.send(data);
}
var signupSubmit = function(){
    var data =  JSON.stringify({first_name:document.getElementById('firstName').value,last_name:document.getElementById('lastName').value,email:document.getElementById('email').value,username:document.getElementById('username').value,password:document.getElementById('psd').value,college:document.getElementById('college').value,contact:document.getElementById('phoneNumber').value,token:'signpo354'});
    var http = new XMLHttpRequest();
    http.withCredentials = true;
    http.open('POST', 'http://register.zealicon.in/signup', true);
    http.addEventListener('load',signupResponse);
    http.send(data);
}