<?php

$name = '';
$phone = '';
$text = '';

if (isset($_POST['name'])) {
    $name = iconv("utf-8", "windows-1251", "<b>Имя: </b>" . $_POST['name'] . "<br />");
}

if (isset($_POST['phone'])) {
    $phone = iconv("utf-8", "windows-1251", "<b>Для связи: </b>" . $_POST['phone'] . "<br />");
}

if (isset($_POST['text'])) {
    $text = iconv("utf-8", "windows-1251", "<b>Сообщение: </b>" . $_POST['text'] . "<br />");
}

$message = $name . $phone . $text;

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=windows-1251' . "\r\n";

mail("ketov1992@list.ru", iconv("utf-8", "windows-1251", "Оставить заявку"), $message, $headers);


header("Success: ");

header("Content-type: text/html; charset=windows-1251");
?>Данные в заголовках
