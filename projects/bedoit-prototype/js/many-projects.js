$(document).ready(function (event) {



    var width = $('.wrapper').outerWidth();
    $('#menu').addClass('fixed');
    $('.fixed').css({'width': width});
    $('#logo').css({'margin-top': -36});
    $('#doodle').show('blind', {direction: 'vertical'}, 400);

    //alert('крутится');
    if ($(window).width() >= 940)
    {

        /*
         //alert('больше 940');
         
         var distance = $('#services').offset().top;
         if ($(document).scrollTop() >= distance)
         {
         //alert('надо анимировать');
         
         if(!$('#menu').hasClass('fixed'))
         {
         
         $('#your-project-container').html('<div id="your-project" class="right">Обсудить ваш проект</div>');
         
         
         
         $('#logo').hide();
         $('#menu-items').hide();
         
         $('#logo').css({'margin-top': -36});
         setInterval(function () 
         {
         //$('#your-project, #logo, #menu-items').fadeIn(600);
         $('#menu-items, #your-project, #logo').fadeIn(600);
         //$('').fadeIn(600);
         //$('#your-project').show();
         }, 400);
         //$('#your-project').show();
         //$('#menu-items, #logo').addClass('absolute');
         //$('#menu-items').css({'width': '100%'});
         //
         $('#header-phone').hide();
         }
         else{
         return;
         }
         
         
         }
         
         else
         if($('#menu').hasClass('fixed'))
         {
         //alert('надо убирать');
         $('#doodle').hide('blind', {direction: 'vertical'}, 400);
         $('#your-project-container').html('');
         
         $('#menu').removeClass('fixed');
         
         //$('#menu-items, #logo').removeClass('absolute');
         $('#header-phone').show();
         }
         else{
         return;
         }
         
         */
    }
    else
    {
        return;
    }


});

