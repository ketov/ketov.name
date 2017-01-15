$(document).ready(function () {

    function blockHeightAdaptive(block, maxHeight, minHeight) {
        if ($(window).height() >= minHeight && $(window).height() < maxHeight) {
            jQuery(block).css("height", "" + $(window).height() + "px");
        } else if ($(window).height() < minHeight) {
            jQuery(block).css("height", "" + minHeight + "px");
        } else {
            jQuery(block).css("height", "" + maxHeight + "px");
        }
    }

    blockHeightAdaptive('.ketov-block', 900, 500);
    $(window).resize(function () {
        blockHeightAdaptive($('.ketov-block', 700, 500));
    });

    $('.hover-item').hover(
            function () {
                $(this).parent('.hover-block').children('.active').removeClass('active');
                $(this).addClass('active');
                var index = $(this).index();

                $(this).parent('.hover-block').siblings('.project__images').children('.active').removeClass('active');
                $(this).parent('.hover-block').siblings('.project__images').children('.project__image-div').eq(index).addClass('active');
            },
            function () {

            });

    $('.project').hover(
            function () {
                $(this).children('.hover-block').show();
                $(this).children('.project-link').children('span').addClass('hover');
            },
            function () {
                $(this).children('.hover-block').hide();
                $(this).children('.project-link').children('span').removeClass('hover');
            });

    $('.ketov-block__button').click(function () {
        $('.black-bg').fadeIn(400);

        setTimeout(function () {
            $('.ketov-block__form-container').fadeIn(400);
        }, 450);
    });

    $('.request__button').click(function () {
        $('.black-bg').fadeIn(400);

        setTimeout(function () {
            $('.request__form-container').fadeIn(400);
        }, 450);
    });

    $('.ketov-block__form-close').click(function () {
        $('.ketov-block__form-container').fadeOut(400);

        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 450);
    });

    $('.request__form-close').click(function () {
        $('.request__form-container').fadeOut(400);

        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 450);
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".ketov-block__form-container").length || $(event.target).closest(".ketov-block__button").length || $(event.target).closest(".request__form-container").length || $(event.target).closest(".request__button").length)
            return;
        $('.ketov-block__form-container, .request__form-container').fadeOut(400);

        setTimeout(function () {
            $('.black-bg').fadeOut(400);
        }, 450);
        event.stopPropagation();
    });

    $('.ketov-block__form-button').click(function () {
        return false;
    });

    $('.request__form-button').click(function () {
        return false;
    });

    $('.popup-input').focus(function () {


        $(this).animate({
            backgroundColor: "#fff"
        }, 250);

        $(this).css({'border-bottom': '1px solid #dcdcdc', 'border-radius': 0, 'padding-bottom': 7});

        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
    });


    $('.popup-input').focusout(function () {
        if ($(this).val().trim() == '') {
            $(this).css({'border-bottom': 'none', 'border-radius': 5, 'padding-bottom': 8, 'background': '#eeecd1'});
        } else {
            return;
        }
    });


    $('.ketov-block__form-button').click(function () {

        var req = new XMLHttpRequest();
        var formData = new FormData();

        var name = $('.ketov-block__form-name-input').val().trim();
        var phone = $('.ketov-block__form-phone-input').val().trim();
        var text = $('.ketov-block__form-text').val().trim();

        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('text', text);

        req.onreadystatechange = function () {

            if (req.readyState == 4) {
                if (req.status == 200) {

                    var success = req.getResponseHeader("Success");
                    if (success != null) {
                        $('.ketov-block__form-success').html("Спасибо за обращение!<br /> \n\
                                                                       В ближайшее время я отвечу.");

                        $('.ketov-block__form-name-input').val('');
                        $('.ketov-block__form-phone-input').val('');
                        $('.ketov-block__form-text').val('');

                        setTimeout(function () {
                            $('.ketov-block__form-container').fadeOut(400);
                        }, 1800);

                        setTimeout(function () {
                            $('.black-bg').fadeOut(400);
                        }, 2200);

                        return;
                    } else {
                    }
                }
            }
        }
        req.open("POST", "ketovForm.php", true);
        req.send(formData);
    });
    
    
    
    $('.request__form-button').click(function () {

        var req = new XMLHttpRequest();
        var formData = new FormData();

        var name = $('.request__form-name-input').val().trim();
        var phone = $('.request__form-phone-input').val().trim();
        var text = $('.request__form-text').val().trim();

        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('text', text);

        req.onreadystatechange = function () {

            if (req.readyState == 4) {
                if (req.status == 200) {

                    var success = req.getResponseHeader("Success");
                    if (success != null) {
                        $('.request__form-success').html("Спасибо за обращение!<br /> \n\
                                                                       В ближайшее время я отвечу.");

                        $('.request__form-name-input').val('');
                        $('.request__form-phone-input').val('');
                        $('.request__form-text').val('');

                        setTimeout(function () {
                            $('.request__form-container').fadeOut(400);
                        }, 1800);

                        setTimeout(function () {
                            $('.black-bg').fadeOut(400);
                        }, 2200);

                        return;
                    } else {
                    }
                }
            }
        }
        req.open("POST", "requestForm.php", true);
        req.send(formData);
    });

});
