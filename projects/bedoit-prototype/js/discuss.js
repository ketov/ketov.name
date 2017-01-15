$(document).ready(function (event) {

    $('#discuss, #discuss-project, #your-project-container, #your-project-products').click(function () {


        if (!$("div").is("#form-container")) {

            var form = "<form id='discuss-form'>\n\
                            <h1 class='roboto-thin'>Опишите ваш проект</h1><div class='success'></div>\n\
                                <label for='form-name'>Как вас зовут?</label>\n\
                                <div class='error' id='nameError'></div><input type='text' placeholder='Алексей Дмитриевич' id='form-name'/>\n\
                \n\
                                <label for='form-phone' id='label-for-phone'>\n\
                                        Телефон\n\
                                </label>\n\
\n\
                                <div class='error' id='phoneError'></div><input type='text' id='form-phone' placeholder='+7 (154) 245-05-12'/>\n\
                                \n\
                                \n\
\n\
                                <label for='form-comment'>Комментарий</label>\n\
                                <div class='error' id='commentError'></div><textarea id='form-comment' placeholder='Мы хотим сделать сервис по доставке цветов но пока не уверены что будет лучше: лэндинг или интернет-магазин.'></textarea>\n\
\n\
                                <input type='submit' value='Отправить' id='form-send' /></form>";

            $('body').prepend("<div id='form-container'></div>");
            $('#form-container').css({'height': $('body').height()});

            //$('html, body').animate({scrollTop: 0}, 'slow');

            $('#form-container').after(form);

            var discussHeight = $('#discuss-form').height();
            $('#discuss-form').css({'margin-top': -discussHeight / 2});

            $('#form-container').fadeIn(600);
            $('#discuss-form').fadeIn(900);
        }
        else {
            var discussHeight = $('#discuss-form').height();
            $('#discuss-form').css({'margin-top': -discussHeight / 2});
            //$('html, body').animate({scrollTop: 0}, 'slow');
            $('#form-container').fadeIn(600);
            $('#discuss-form').fadeIn(900);
        }

        $('#form-phone').mask('+7 (000) 000-00-00');



        /*$("#right").click(function () {
         $(".block").animate({"left": "+=50px"}, "slow");
         });*/

        $('#form-send').hover
                (
                        function () {
                            $(this).animate({'background-color': '#f25350', 'color': '#fff'}, 200);
                        },
                        function () {
                            $(this).animate({'background-color': '#fff', 'color': '#000'}, 200);
                        }
                );


        $(document).mouseup(function (e) {
            var container = $("#discuss-form");
            if (container.has(e.target).length === 0) {
                $('#form-container').fadeOut(600);
                container.fadeOut(500);
            }
        });

        $('#form-send').click(function () {
            var nameError = $('#form-name').val().trim();
                if(nameError === ''){
                    $('#nameError').text('Ошибка');
                }
                else{
                    $('#nameError').text('');
                }
            var phoneError = $('#form-phone').val().trim();
                if(phoneError === ''){
                    $('#phoneError').text('Ошибка');
                }
                else{
                    $('#phoneError').text('');
                }
            var nameComment = $('#form-comment').val().trim();
                if(nameComment === ''){
                    $('#commentError').text('Ошибка');
                }
                else{
                    $('#commentError').text('');
                }
                
                if(nameComment !== '' && phoneError !== '' && nameError !== ''){
                    $('.success').text('Спасибо за обращение. Мы внимательно изучим вашу заявку и свяжемся с вами.');
                }
                else{
                    $('.success').text('');
                }
                
                var discussHeight = $('#discuss-form').height();
            $('#discuss-form').animate({'margin-top': -discussHeight / 2}, 500);
                    //alert(nameError);
            //alert(phoneError);
            //alert(nameComment);
            return false;
        });

    });



});