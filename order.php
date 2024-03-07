<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$product = 'Тапочки';            // НАЗВА ТОВАРУ
$product_id = '84';              //АЙДІ ТОВАРУ
$country = 'Ukraine';
$_GET['field'] = $_POST['field'];
$payment_type = 'COD';
$number_of_pieces = '1';
//$_GET['amount'] = $_POST['amount'];         // КІЛЬКІСТЬ ТОВАРУ
$amount = $_POST['price'];                 // ЦІНА ТОВАРУ

$crm_order_id = number_format(round(microtime(true)*10),0,'.','');

/******* Отправка в CRM ********/

// формируем массив с товарами в заказе (если товар один - оставляйте только первый элемент массива)
$products_list = array(
    1 => array( 
            'product_id' => $product_id,          //код товара (из каталога CRM)
            'price'      => $amount,              //цена товара 1
            'count'      => $number_of_pieces     //количество товара 1
    )
);
$products = urlencode(serialize($products_list));
$sender = urlencode(serialize($_SERVER));
// параметры запроса
$data = array(
    'key'             => 'b05b1c2c2c181be4bed332fd15010b60', //Ваш секретный токен /Ваш секретный токен/Ваш секретный токен/Ваш секретный токен!!!!
    'order_id'        => $crm_order_id, //идентификатор (код) заказа (*автоматически*)
    'country'         => 'UA',                      // Географическое направление заказа
    'office'          => '4',                   // Офис (id в CRM)
    'products'        => $products,                 // массив с товарами в заказе
    'bayer_name'      => $name,             // покупатель (Ф.И.О)
    'phone'           => $phone,           // телефон
    'email'           => $_GET['email'],           // электронка
    'comment'         => $_GET['field'],    // комментарий
    'site'            => $_SERVER['SERVER_NAME'],  // сайт отправляющий запрос
    'ip'              => $_SERVER['REMOTE_ADDR'],  // IP адрес покупателя
    'delivery'        => $_GET['delivery'],        // способ доставки (id в CRM)
	'delivery_adress' => $address,         // адрес доставки
    'payment'         => 'способ оплаты',          // вариант оплаты (id в CRM)
    'sender'          => $sender,
    'utm_source'      => $_POST['utm_source'],  // utm_source 
    'utm_medium'      => $_POST['utm_medium'],  // utm_medium 
    'utm_term'        => $_POST['utm_term'],    // utm_term   
    'utm_content'     => $_POST['utm_content'], // utm_content    
    'utm_campaign'    => $_POST['utm_campaign'] // utm_campaign
);
 
// запрос
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://rallllf2323.lp-crm.biz/api/addNewOrder.html');
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
$out = curl_exec($curl);
curl_close($curl);
//$out – ответ сервера в формате JSON



header("Location: form-ok.php");
?>