/* eslint-env node, jquery */

$(document).ready(function(){
    var movingAnimation;

    function moveHeadLines() {
        $('#container').css({
            left: "-=2px"
        });
        console.log($('a').first().offset().left + $('a').first().outerWidth());
        if ($('a').first().offset().left + $('a').first().outerWidth() <= 0) {
            var firstWidth = $('a').first().outerWidth();
            $('a').first().detach().appendTo('#container');
            $('#container').css({
                left: "+=" + firstWidth
            });
        }
        movingAnimation = window.requestAnimationFrame(moveHeadLines);
    }

    $('#container').on('mouseover', function stopThere() {
        window.cancelAnimationFrame(movingAnimation);
    });

    $('#container').on('mouseout', function resume() {
        movingAnimation = window.requestAnimationFrame(moveHeadLines);
    });

    movingAnimation = window.requestAnimationFrame(moveHeadLines);
});
