/* File Created: setembro 15, 2012 */
!function ($) {

    $.fn.drsnik = function (options) {

        var defalts = {
            buttonWidth: 20,
            buttonHeight: '100%',
            width: 100,
            height: 100,
            display: 5
        };

        var settings = $.extend(defalts, options);

        var self = this;

        var ul = $(this).children('section').children('ul');
        var li = $(this).children('section').children('ul').children('li');
        var section = $(this).children('section');
        var buttonLeft = $(this).children('button[role="left"]');
        var buttonRight = $(this).children('button[role="right"]');

        var run = true;
        var slides = 0;

        var current = settings.display;

        $(this).css("width", (settings.width * settings.display) + (settings.buttonWidth * 2));
        $(this).css("height", settings.height);
        li.css("width", settings.width);
        li.css("height", settings.height);
        buttonLeft.css("width", settings.buttonWidth);
        buttonLeft.css("height", settings.buttonHeight);
        buttonRight.css("width", settings.buttonWidth);
        buttonRight.css("height", settings.buttonHeight);
        section.css("width", (settings.width * settings.display));
        section.css("height", settings.buttonHeight);

        /*conta o numero de slides*/
        li.each(function (i) {
            slides++;
        });

        buttonLeft.click(function () {
            if (run & current > settings.display) {
                run = !run;
                current--;
                ul.animate({ "left": "+=" + settings.width }, function () {
                    run = !run;
                });
            }
        });

        buttonRight.click(function () {
            if (run & current < slides) {
                run = !run;
                current++;
                ul.animate({ "left": "-=" + settings.width }, function () {
                    run = !run;
                });
            }
        });
    }


} (window.jQuery);