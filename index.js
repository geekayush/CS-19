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