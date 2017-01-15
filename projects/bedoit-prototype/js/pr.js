$(document).ready(function (event) {


var tempScrollTop, currentScrollTop = 0;
    $(document).scroll(function () {
        currentScrollTop = $(window).scrollTop();
        if (tempScrollTop < currentScrollTop)
        
        
        
        {
         if($(document).scrollTop() > 0)   {
             $('#menu').animate({'padding-top': 33}, 200);
            $('#logo-projects').animate({'margin-top': -36}, 200);
            $('#doodle-projects').animate({'height': 83}, 200);
            $('#discuss-project').animate({'top': 23}, 200);
         }
        }
        else if (tempScrollTop > currentScrollTop)
//scrolling up
        {
            if ($(document).scrollTop() < 250) {
            $('#menu').animate({'padding-top': 50}, 200);
            $('#logo-projects').animate({'margin-top': -42}, 200);
            $('#doodle-projects').animate({'height': 113}, 200);
            $('#discuss-project').animate({'top': 37}, 200);
            //alert(0);
        }
        }
        tempScrollTop = currentScrollTop;
        
    });
    
    


});

