$(document).ready(function (event) {

    jQuery("#map").css("height", "" + jQuery(window).height() + "px");
    jQuery("#map").css("width", "" + jQuery(window).width() + "px");

    map(55.757709, 37.629286);

    var width = $(document).width();
    if($(document).width() < 1400){
        width = width-20;
    }
    

    var coefficient = width / 100;

    var left = $('#in-russia').offset().left;

    var left = left / width * 100;
    var right = 100 - left;
    $('#doodle-contacts, #triangle, #map').css({'width': width+20});
    $('#triangle-1').css({'width': left * coefficient});
    $('#triangle-2').css({'width': right * coefficient});







    $(window).resize(function () {
        if ($(window).width() < 945) {
            var width = $(document).width();
        }
        else {
            var width = $(window).width();
        }
        //var width = $(window).width();
        //width = (width - 20) / 100;
        resize(width);
    });


    function resize(width) {
        //var width = ($(document).width() - 20) / 100;

        var coefficient = (width - 20) / 100;

        var left = $('#in-russia').offset().left;

        var left = left / width * 100;
        var right = 100 - left;

        //$('#triangle-1').css({'width': left * coefficient});
        //$('#triangle-2').css({'width': right * coefficient});





        $('#doodle-contacts, #triangle, #map').css({'width': width});
        //$('#triangle').css({'width':$(document).width()});

        $('#triangle-1').css({'width': coefficient * 12});
        $('#triangle-2').css({'width': coefficient * 88});

    }

    $('#in-russia').click(function () {
        if ($(this).hasClass('office-active')) {
            return;
        }
        else {
            $('.office-active').removeClass('office-active');
            $(this).addClass('office-active');

            var width = $(document).width();
            width = width - 20;

            var coefficient = width / 100;

            var left = $('#in-russia').offset().left;

            var left = left / width * 100;
            var right = 100 - left;

            $('#triangle-1').css({'width': left * coefficient});
            $('#triangle-2').css({'width': right * coefficient});

            $('#map').html('');
            map(55.757709, 37.629286);
        }
    });

    $('#in-spain').click(function () {
        if ($(this).hasClass('office-active')) {
            return;
        }
        else {
            $('.office-active').removeClass('office-active');
            $(this).addClass('office-active');


            var width = $(document).width();
            width = width - 20;
            var coefficient = width / 100;
            var left = $('#in-spain').offset().left;
            var left = left / width * 100;
            var right = 100 - left;

            $('#triangle-1').css({'width': left * coefficient});
            $('#triangle-2').css({'width': right * coefficient});


            $('#map').html('');
            map(41.2151504, 1.7274459999999863);
        }
    });

    function map(x, y) {
        ymaps.ready(init);
        var myMap,
                myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [x, y],
                zoom: 17,
                controls: []
            });

            myPlacemark = new ymaps.Placemark([x, y], {
                hintContent: 'Bedoit'
            });

            myMap.geoObjects.add(myPlacemark);
        }
    }

});

