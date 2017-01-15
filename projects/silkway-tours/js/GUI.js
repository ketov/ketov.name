$(document).ready(function() {

    $('#fotorama-1, #fotorama-2').ready(function() {
        $('#reviews-not-active').hide();
    });


    blockHeightAdaptive("#first-block", 900, 600);
    contactInfoResize();
    sliderSize();
    videoHeight();
    map();
    fotorama();

    $(window).resize(function() {
        blockHeightAdaptive("#first-block", 900, 600);
        contactInfoResize();
        sliderSize();
        videoHeight();
        map();
        fotorama();
    });


    function point() {

        setTimeout(function() {
            $('.compare-point').each(function() {
                $(this).animate({
                    width: 40,
                    height: 40
                }, 800);
            });
        }, 200);

        setTimeout(function() {
            $('.compare-point').each(function() {
                $(this).animate({
                    width: 34,
                    height: 34
                }, 800);
            });
        }, 1050);


    }

    point();

    setInterval(function() {
        point();
    }, 2200);



    $('#compare-point-1').click(function() {
        $('#compare-plate-1').fadeIn(600);
        $(this).animate({
            opacity: 0
        }, 500);
    });


    //скрыть форму
    $(document).click(function(event) {
        if ($(event.target).closest("#compare-point-1").length || $(event.target).closest("#compare-plate-1").length)
            return;
        $('#compare-plate-1').fadeOut(600);
        $('#compare-point-1').animate({
            opacity: 1
        });
        event.stopPropagation();
    });



    $('#compare-point-2').click(function() {
        $('#compare-plate-2').fadeIn(600);
        $(this).animate({
            opacity: 0
        }, 500);
    });


    //скрыть форму
    $(document).click(function(event) {
        if ($(event.target).closest("#compare-point-2").length || $(event.target).closest("#compare-plate-2").length)
            return;
        $('#compare-plate-2').fadeOut(600);
        $('#compare-point-2').animate({
            opacity: 1
        });
        event.stopPropagation();
    });
    
    
    
    $('#compare-point-3').click(function() {
        $('#compare-plate-3').fadeIn(600);
        $(this).animate({
            opacity: 0
        }, 500);
    });


    //скрыть форму
    $(document).click(function(event) {
        if ($(event.target).closest("#compare-point-3").length || $(event.target).closest("#compare-plate-3").length)
            return;
        $('#compare-plate-3').fadeOut(600);
        $('#compare-point-3').animate({
            opacity: 1
        });
        event.stopPropagation();
    });



    scrollTo('#menu-compare', '#compare');
    scrollTo('#menu-approach', '#how');
    scrollTo('#menu-reviews', '#reviews');
    scrollTo('#menu-request', '#form-container');
    scrollTo('#logo', '#first-block');

    $('#first-block-button').click(function() {
        $('#black-bg').fadeIn(400);

        setTimeout(function() {
            $('#learn-more-container').fadeIn(400);
        }, 450);
    });

    $('#close-learn-more-form').click(function() {
        $('#learn-more-container').fadeOut(400);

        setTimeout(function() {
            $('#black-bg').fadeOut(400);
        }, 450);
    });



    $('#tour-application-button').click(function() {
        $('#black-bg').fadeIn(400);

        setTimeout(function() {
            $('#tour-container').fadeIn(400);
        }, 450);
    });

    $('#close-tour-form').click(function() {
        $('#tour-container').fadeOut(400);

        setTimeout(function() {
            $('#black-bg').fadeOut(400);
        }, 450);
    });

    //скрыть форму
    $(document).click(function(event) {
        if ($(event.target).closest("#learn-more-container").length || $(event.target).closest("#tour-container").length || $(event.target).closest(".yellow-button").length)
            return;
        $('#learn-more-container, #tour-container').fadeOut(400);
        setTimeout(function() {
            $('#black-bg').fadeOut(400);
        }, 450);
        event.stopPropagation();
    });


    function fotorama() {

        /*var height = $(window).height();
         if (height > 650) {
         $('.fotorama').fotorama({width: 500, height: 250});
         
         }
         else {
         $('.fotorama').fotorama({width: 500, height: 650});
         }*/
        $('.fotorama').each(function() {

            $(this).fotorama({'width': ($('.review-video-container').width())});
            //$('.fotorama-slide').each(function(){
            //$(this).css({'width': $('.span8').width(), 'height': ($('.span8').width())*0.6});
            //});
        });

    }


    function videoHeight() {
        var width = $('.review-video-container').width();
        $('.review-video-container iframe').each(function() {
            $(this).css({'height': width * 0.7});
        });
    }


    $('.compare-slide-tab').hover(function() {
        if ($(this).hasClass('compare-slider-active-tab')) {
            return;
        }
        else {
            $(this).animate({
                backgroundColor: "#353535",
                borderColor: "#353535"
            }, 300);
        }

    }, function() {
        if ($(this).hasClass('compare-slider-active-tab')) {
            return;
        }
        else {
            $(this).animate({
                backgroundColor: "#f3f3f3",
                borderColor: "#f4ae3e"
            }, 300);
        }

    });





    $('.shopping-centers-navigation-header').hover(function() {
        if ($(this).hasClass('active-shopping-center')) {
            return;
        }
        else {
            $(this).animate({
                backgroundColor: "#353535",
                borderColor: "#353535"
            }, 300);
        }

    }, function() {
        if ($(this).hasClass('active-shopping-center')) {
            return;
        }
        else {
            $(this).animate({
                backgroundColor: "#666666",
                borderColor: "#f4ae3e"
            }, 300);
        }

    });


    $('.shopping-centers-navigation-header').click(function() {
        if ($(this).hasClass('active-shopping-center')) {
            return;
        }
        else {
            var bg = $(this).attr('data-image');
            $('#slider-image-container').css({'background-image': 'url("' + bg + '")'});


            $('.active-shopping-center').css({'background': '#666', 'border': '1px solid #f4ae3e'});
            $('.active-shopping-center').removeClass('active-shopping-center');
            $(this).addClass('active-shopping-center');

            $('.active-shopping-center-container').removeClass('active-shopping-center-container');
            $(this).parent().addClass('active-shopping-center-container');
            //alert($(this).attr('data-image'));
        }
    });








    $('#show-reviews').hover(function() {
        $(this).animate({
            backgroundColor: '#2fb4e8',
            color: '#fff'
        }, 300);
    },
            function() {
                $(this).animate({
                    backgroundColor: '#fff',
                    color: '#2fb4e8'
                }, 300);
            });

    $('#show-reviews').click(function() {
        if ($(this).hasClass('show-reviews-button-active')) {
            $('#reviews-not-active').hide('blind', {direction: 'up'}, 400);
            $(this).html("Показать ещё 3 отзыва <i class='fa fa-angle-down'></i>");
            $(this).removeClass('show-reviews-button-active');



            //form.hide('blind', {direction: "up"}, 500);

            var destination = $('#reviews').offset().top - 50;
            jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
        }
        else {
            $('#reviews-not-active').fadeIn(600);
            $(this).html("Скрыть отзывы <i class='fa fa-angle-up'></i>");
            $(this).addClass('show-reviews-button-active');
        }
        //$('#reviews-not-active').show('blind', {direction: 'top'}, 400);


    });


    $('.compare-slide-tab').click(function() {
        if ($(this).hasClass('compare-slider-active-tab')) {
            return;
        }

        else {
            $('.compare-slider-active-tab').addClass('compare-slider-not-active-tab');
            $('.compare-slider-active-tab').css({'background': '#f3f3f3', 'border': '1px solid #f4ae3e'});
            $('.compare-slider-active-tab').removeClass('compare-slider-active-tab');


            $(this).removeClass('compare-slider-not-active-tab');
            $(this).addClass('compare-slider-active-tab');



            var slideToShow = $(this).attr('data-slide');

            $('.compare-slide-active').animate({
                opacity: 0
            }, 400);
            $('.compare-slide-active').removeClass('compare-slide-active');
            $(slideToShow).animate({
                opacity: 1
            }, 400);
            $(slideToShow).addClass('compare-slide-active');

        }
    });







    function sliderSize() {
        /*if ($(window).height() >= 500 && $(window).height() < 900) {
         jQuery("#slider-image-container").css("height", "" + $(window).height() + "px");
         }
         else if ($(window).height() < 500) {
         jQuery("#slider-image-container").css("height", "" + 500 + "px");
         }
         else {
         jQuery("#slider-image-container").css("height", "" + 900 + "px");
         }*/
        jQuery('#slider-image-container').css('height', '' + $('#slider-image-container').width() * 0.55 + 'px');
    }


    function contactInfoResize() {
        /* var width = $(window).width();
         if (width >= 820 && width < 1600) {
         $('#contact-info-container').css({'margin-left': '4%'});
         $('#contact-info').css({'margin-left': 0});
         $('#contact-info-container').css({'height': $('#map-container').height()});
         }
         else if (width < 820) {
         $('#contact-info-container').css({'margin-left': '2%'});
         }
         else {
         $('#contact-info').css({'margin-left': ((($(window).width() - 1600) / 2) - 2)});
         $('#contact-info-container').css({'margin-left': 0, 'height': $('#map-container').height()});
         }*/

        var width = $(window).width();
        if (width >= 1600) {
            $('#contact-info').css({'margin-left': ((($(window).width() - 1600) / 2) - 2)});
        }
        else {
            $('#contact-info').css({'margin-left': 0});
        }
    }


    $('input').focus(function() {


        $(this).animate({
            backgroundColor: "#fff"
        }, 250);

        $(this).css({'border-bottom': '1px solid #dcdcdc', 'border-radius': 0, 'padding-bottom': 7});

        if ($(this).hasClass('error')) {
            $(this).removeClass('error');
        }
    });


    $('input').focusout(function() {
        if ($(this).val().trim() == '') {
            $(this).css({'border-bottom': 'none', 'border-radius': 5, 'padding-bottom': 15, 'background': '#eeecd1'});
        }

        else {
            return;
        }
    });


    function map() {
        if ($(window).width() >= 820) {
            jQuery("#map-container").css("width", "" + $(window).width() * 0.5 + "px");
            jQuery("#contact-info").css("width", "" + $(window).width() * 0.5 + "px");
        }
        else {
            jQuery("#map-container").css("width", $(window).width());
            jQuery("#contact-info").css("width", $(window).width());
        }



        var height = $('#contact-info').height() + 10;
        jQuery('#map-container').css('height', '' + height + 'px');
        /*if ($(window).height() >= 500 && $(window).height() < 900) {
         jQuery("#map-container").css("height", "" + $(window).height() + "px");
         }
         else if ($(window).height() < 500) {
         jQuery("#map-container").css("height", "" + 500 + "px");
         }
         else {
         jQuery("#map-container").css("height", "" + 900 + "px");
         }*/
    }


    ymaps.ready(init);

    function init() {
        var center1 = [59.900254, 30.291281];

        var myMap1 = new ymaps.Map('map-container', {
            center: center1,
            zoom: 16,
            controls: []
        });

        var myPlacemark1 = new ymaps.Placemark(center1, {
            hintContent: 'Silkway Tours'
        });

        var zoomControl1 = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                float: "none",
                position: {top: 30, left: 20}
            }
        });


        myMap1.controls.add(zoomControl1);
        myMap1.geoObjects.add(myPlacemark1);
        myMap1.behaviors.disable('scrollZoom');
    }


    $('#main-form-phone, #learn-more-form-phone, #tour-form-phone').mask('+7 000 000 00 00');

    $('#main-form-phone, #learn-more-form-phone, #tour-form-phone').focus(function() {
        var val = $(this).val().trim();
        if (val.length < 3) {
            $(this).val('+7 ');
        }
    });

    $('#main-form-phone, #learn-more-form-phone, #tour-phone-phone').keyup(function() {
        var val = $(this).val().trim();
        if (val.length < 3) {
            $(this).val('+7 ');
        }
    });

});