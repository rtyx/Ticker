/* eslint-env node, jquery */

$(document).ready(function(){

    var templates = document.querySelectorAll('script[type="text/handlebars"]');

    Handlebars.templates = Handlebars.templates || {};

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    $.getJSON('http://127.0.0.1:8080/links.json', function(json) {
        $('#container').html(Handlebars.templates.results(
            {json: json}
        ));
    });

    var movingAnimation;

    function moveHeadLines() {
        $('#container').css({
            left: "-=2px"
        });
        if ($('a').first().offset().left + $('a').first().outerWidth() <= 0) {
            var firstWidth = $('a').first().outerWidth();
            $('a').first().appendTo('#container');
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
