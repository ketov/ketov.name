<?php

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $name = iconv("utf-8", "windows-1251", "Имя: " . $name);
}

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    if (mb_strlen($phone) != 16) {
        $phone = false;
        header("Phone:");
    } else {
        $phone = iconv("utf-8", "windows-1251", "Телефон: " . $phone);
    }
}

if ($phone) {
    $message = $name . "<br />" . $phone . "<br />" . $text;

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=windows-1251' . "\r\n";

    mail("cement-pb@mail.ru", iconv("utf-8", "windows-1251", "Вопрос"), $message, $headers);


    header("Success: ");
}

header("Content-type: text/html; charset=windows-1251");
?>Данные в заголовках
