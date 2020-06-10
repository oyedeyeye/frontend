// nav triggee
new WOW().init();
$(function(){
    $(document).scroll(function(){
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scroll() > $nav.height());
    });
});