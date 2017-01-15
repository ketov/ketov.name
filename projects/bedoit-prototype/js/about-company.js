$(document).ready(function (event) {

    var height = $('#bottom-menu-container').height();
    var width = $('#in-wrapper').width();
    
    $('#header-bg-container-services').css({'min-height':$(window).height()});
    
    $('#header-bg-container-services, #in-wrapper').css({'min-height':$('#header-bg-container-services').height()});
    $('#doodle-blue').css({'height':height, 'width':width, 'margin-top':-height});
    $('#bottom-menu-container').css({'margin-top':-height, 'width':width});
    
    
    $('.service-item:eq(2), .service-item:eq(5)').css({'margin-right':0});
    $('.service-item:eq(1), .service-item:eq(4)').css({'margin-left':'4%', 'margin-right':0}); 
    
    $(window).resize(function (){
        $('#doodle-blue, #bottom-menu-container, #in-wrapper, #header-bg-container-services').css({'width':$(document).width()});
        
    });
    
    $('#bottom-menu-item-6').click(function(){
        $('#slide-7').fadeOut(400);
        setTimeout(function () {
                $('#slide-6').show( 'slide', { direction: "right" } , 600);
            }, 400);
        
        
        $('.active-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
    });
    
    $('#bottom-menu-item-7').click(function(){
       $('#slide-6').fadeOut(400);
       setTimeout(function () {
                $('#slide-7').show( 'slide', { direction: "right" } , 600);
            }, 400);
        
        
        $('.active-slide').removeClass('active-slide');
        $(this).addClass('active-slide');
    });
    
    
    $('#slide-6').css({'height':$('#slide-6').height()+50});
    $('#slide-7').css({'height':$('#slide-7').height()+50});
});

