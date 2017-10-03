export default class PageUtil {
    constructor() {

    }

    /**
     * Smooth scrool to given div
     *
     */
    static startSmoothScrolling() {
        $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    console.log('target: ', target);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }
}



var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

/*
$(window).scroll(function() {
    var st = $(this).scrollTop();
    //console.log('scrolling...',st)

    if(Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('nav').addClass('shrink');
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if (st + $(window).height() < $(document).height()) {
            $('nav').removeClass('shrink');
        }
    }

    lastScrollTop = st;

    /*
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    */
//});




/*function hasScrolled() {
    // do stuff here...
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) {
        return;
    }

    console.log('scrolling')

    // If current position > last position AND scrolled past navbar...
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $("#header").removeClass("navbar-fixed-top").addClass("nav-up");
    } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        if (st + $(window).height() < $(document).height()) {
            $("#header").removeClass("nav-up").addClass("navbar-fixed-top");
        }
    }

    lastScrollTop = st;
}
*/

//var didScroll;
// on scroll, let the interval function know the user has scrolled
/*$(window).scroll(function(event) {
    didScroll = true;
});
// run hasScrolled() and reset didScroll status
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
*/