$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('nav-active');
    });

    $('nav ul li a').click(function() {
        $('nav ul li a').removeClass('active-color');
        $(this).addClass('active-color');
    });


    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({
            scrollTop: pos
        });
    });

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-color');
                sections.removeClass('active-color');

                $(this).addClass('active-color');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-color');
            }
        });
    });


});