angular.module("artApp").directive("voting", function() {
    return {
        restrict: "EA",
        link: function(scope, elements, attributes) {
            $('.hider').on('click', function() {
                $('.hides').css('visibility', 'visible');
                $('.hide-me').hide();
            });



// picture slide out...Not possible apparently for now


            // $('.glyphicon-heart').click(function() {
            //     if ($('.sliding').offset().left !== 0) {
            //     console.log('if');
            //     $(this).css("left", "0");
            //     }
            //     $('.sliding').each(function() {
            //          if ($(this).offset().left > $('.sliding').width()) {
            //           console.log('else if');
            //             $(this).animate({
            //                     left: '150%',
            //                 },
            //                 500);
            //         } else {
            //           console.log('else');
            //             $(this).animate({
            //                     left: '-100%',
            //                 },
            //                 500);
            //         }
            //     });
            // });

        }
    };
});
