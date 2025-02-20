$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    })

    // scroll-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    // animazione typing
    var typed = new Typed(".typing", {
        strings: ["IT Analyst", "Sage X3 Analyst", "Podcaster", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["IT Analyst", "Sage X3 Analyst", "Podcaster", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});