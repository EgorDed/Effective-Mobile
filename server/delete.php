<?php

$path = __DIR__ . '/data.json';
$data = file_get_contents($path);
$data = rtrim($data);
$data = json_decode($data , true);

foreach ($data as $key => $item) {
    if ($item['id'] == $_POST['id']) {
        unset($data[$key]);
        break;
    }
}

file_put_contents( $path, json_encode(array_values($data)));

echo file_get_contents($path);

