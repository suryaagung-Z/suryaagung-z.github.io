$(document).ready( ()=> {
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MOUSE MOVE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $(document).mousemove((event) => {
        $('#cursor').css({"left": event.clientX + "px",
                          "top": event.clientY + "px",
                        });                                   
      });

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAVBAR SMALL DISPLAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $('.hamburger').click( ()=> {
        $('.nav-link').toggleClass('openJS');

        $('.line:nth-child(1)').toggleClass('line1');
        $('.line:nth-child(2)').toggleClass('line2');
        $('.line:nth-child(3)').toggleClass('line3');
    });

    $('.link').click( ()=> {
        $('.nav-link').removeClass('openJS');

        $('.line:nth-child(1)').removeClass('line1');
        $('.line:nth-child(2)').removeClass('line2');
        $('.line:nth-child(3)').removeClass('line3');
    });
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAVBAR-scrollSpy~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function scrollSpy() {
        var sections = ['profile', 'experiences', 'abilities', 'project', 'contact'];
        var current;

        for (var x = 0; x < sections.length; x++) {
            if ( $('#'+sections[x]).offset().top -10 <= $(window).scrollTop() ) {
                current = sections[x];
            }
        };

        $(".link[href='#"+current+"']").addClass('linkJS');
        $(".link").not("a[href='#"+current+"']").removeClass('linkJS');      
    }

    $(window).scroll( ()=> {
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SCROLLSPY CALL~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        scrollSpy();
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~NAVBAR STICKY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        let scroll= $(this).scrollTop();

        if(scroll >= $('main').offset().top-50){
            $('.nav-link').addClass('navbarJS');
        }
        else{
            $('.nav-link').removeClass('navbarJS');
        };
    });
    
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Disable inspect element~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    $(document).bind('contextmenu',function() {
        alert("sorry");
        return false;
    });

    document.onkeydown = function(e) {
        if(event.keyCode == 123) {
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
           alert("sorry");
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
           alert("sorry");
           return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
           alert("sorry");
           return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
           alert("sorry");
           return false;
        }
    }
    
});