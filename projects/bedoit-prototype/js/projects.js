$(document).ready(function (event) {

    $('.step-header').each(function () {
        if (!$(this).hasClass('.step-header-active')) {
            $(this).siblings('.step-text').hide();
            $(this).siblings('.step-number').css({'margin-top': 15});
            $(this).css({'margin-top': 19});
        }
    });

    $('.step-container').each(function () {
        $(this).children('.step').children('.step-number').first().css({'margin-top': 0});
        $(this).children('.step').children('.step-header').first().css({'margin-top': 3});
        $(this).children('.step').last().css({'background': 'none'});

        var last = $(this).children('.step').last();
        last.children('.step-number').css({'margin-top': 0});
        last.children('.step-header').css({'margin-top': 3});

        $(this).children('.step:eq(-2)').css({'padding-bottom': 15});

    });

    $('.step-header').click(function () {
        if (!$(this).hasClass('visible')) {
            $(this).addClass('visible');
            $(this).siblings('.step-text').show('blind', {direction: 'vertical'}, 400);
            $(this).siblings('.step-number').css({'background': '#197cba', 'color': '#fff'});
        }
        else {
            $(this).removeClass('visible');
            $(this).siblings('.step-text').hide('blind', {direction: 'vertical'}, 400);
            $(this).siblings('.step-number').css({'background': '#fff', 'color': '#197cba'});
        }
    });


    //работа с плавающим меню
    $(window).scroll(function () {



        if ($(window).width() >= 940) {
            var distance = $('#project-info-left').offset().top;
            if ($(document).scrollTop() >= distance)
            {
                if (!$('#menu').hasClass('fixed')) {
                    var width = $('.wrapper').outerWidth();

                    $('#menu').addClass('fixed');
                    $('.fixed').css({'width': width});

                    $('#doodle, #your-project').show('blind', {direction: 'vertical'}, 400);
                    $('#your-project-products, #logo, #menu-items').hide();
                    setInterval(function () {
                        $('#your-project-products, #logo, #menu-items').fadeIn(600);
                    }, 400);

                    $('#menu-items').css({'width': '100%'});
                    $('#logo').css({'top': '36px'});
                    $('#your-project-products').css({'margin-top': -29});
                }
                else {
                    return;
                }
            }
            else
            {
                $('#menu').removeClass('fixed');
                $('#your-project, #doodle').hide('blind', {direction: 'vertical'}, 400);
                $('#menu-items, #logo').removeClass('absolute');
                $('#your-project-products').css({'margin-top': -30});
                //$('#header-phone').show();
            }
        }
        else {
            return;
        }
    });


    //работа с плавающим блоком
    if ($(window).width() > 940) {

        //изначальное расстояние справа до скользящего блока
        var right = ($(document).width()) - $('#project-info-right').width() - $('#project-info-right').offset().left;

        //ширина скользящего блока
        var width = $('#project-info-right').width();


        $(document).scroll(function () {

            var distance = $('#project-info-left').offset().top+80;

            //от начала документа до футера
            var footerDistance = $('#footer').offset().top;

            //высота плавающего блока
            var fixedBlockHeight = $('#project-info-right').height();

            //высота футера
            var footerHeight = $('#footer').height();

            //высота верхней части
            var projectBgContainer = $('#project-bg-container').height();

            //расстояние от начала документа до плавающего блока
            var fixedBlockDistance = $('#project-info-right').offset().top;

            var distanceToScroll = $(document).height() - footerHeight - fixedBlockHeight;

            var distanceBlockLeft = $('#project-info-left').height();


            //скользит
            if (($(document).scrollTop() >= (distance - 83)) && ($(document).scrollTop() <= ($(document).height() - footerHeight - $(window).height() - 125))) {
                $('#project-info-right').addClass('project-info-right-fixed');
                $('#project-info-right').removeClass('project-info-right-relative');
                $('#project-info-right').css({'margin-top': 83, 'right': right, 'width': width});
            }

            //обычный
            if ($(document).scrollTop() < (distance - 83)) {
                $('#project-info-right').removeClass('project-info-right-relative');
                $('#project-info-right').removeClass('project-info-right-fixed');
                $('#project-info-right').css({'margin-top': 0});
            }

            //перед футером
            if ($('#download-case').offset().top >= ($(document).height() - fixedBlockHeight - footerHeight)) {
                $('#project-info-right').addClass('project-info-right-relative');
                $('#project-info-right').removeClass('project-info-right-fixed');
                $('#project-info-right').css({'margin-top': distanceBlockLeft - fixedBlockHeight});
            }
        });
    }

});