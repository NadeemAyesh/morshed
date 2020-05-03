/*global $, jQuery, console, alert, prompt */
$(document).ready(function () {
    "use strict";
    // inialize animate WOW Js
    new WOW().init();

    // Add slideDown animation to Bootstrap dropdown when expanding.
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

    $('[name=quntity]').val(1);

    $('.plus-items').on('click', function () {
        // alert('hi');
        var quan = parseInt($(this).parent().find('[name=quntity]').val());
        // console.log(quan);
        quan = parseInt(quan) + 1;
        $(this).parent().find('[name=quntity]').val(quan);
    });

    $('.minus-items').on('click', function () {
        // alert('hi');
        var quan = parseInt($(this).parent().find('[name=quntity]').val());
        // console.log(quan);
        quan = parseInt(quan) - 1;
        $(this).parent().find('[name=quntity]').val(quan);
    });

    $('.delte-item').on('click', function () {
        $(this).parent().parent().fadeOut(function () {
            $(this).remove();
        });
    });

    // Main slider js
    var owl = $('.testmonials-slider');

    if (owl.length > 0) {
        owl.owlCarousel({
            rtl: true,
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            nav: true,
            navText: ['<i class="fas fa-angle-left fa-fw"></i>', '<i class="fas fa-angle-right fa-fw"></i>'],
            dots: false
        });
    }


    $('[data-toggle="tooltip"]').tooltip();

});


$(document).ready(function(){

    if ($('#stars li').length > 0) {
        /* 1. Visualizing things on Hover - See next part for action on click */
        $('#stars li').on('mouseover', function () {
            var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

            // Now highlight all the stars that's not after the current hovered star
            $(this).parent().children('li.star').each(function (e) {
                if (e < onStar) {
                    $(this).addClass('hover');
                }
                else {
                    $(this).removeClass('hover');
                }
            });

        }).on('mouseout', function () {
            $(this).parent().children('li.star').each(function (e) {
                $(this).removeClass('hover');
            });
        });


        /* 2. Action to perform on click */
        $('#stars li').on('click', function () {
            var onStar = parseInt($(this).data('value'), 10); // The star currently selected
            var stars = $(this).parent().children('li.star');

            for (i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected');
            }

            for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass('selected');
            }


        });

        var path = document.getElementById('tail');
        path.setAttribute('d', 'M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3');
 //var segments = path.pathSegList;
  //segments.getItem(2).y = -10;
    }
    


});
