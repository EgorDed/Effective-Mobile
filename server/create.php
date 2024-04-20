<?php

$path = __DIR__ . '/data.json';
$data = file_get_contents($path);
$data = rtrim($data);

if (!$data) {
    file_put_contents( $path, '[' . json_encode($_POST) . ']' , FILE_APPEND | LOCK_EX);
} else {
    $arr = json_decode($data , true);

    $data = substr($data, 0, -1);
    $fh = fopen($path, 'w') or die("can't open file");
    fwrite($fh, $data);
    fclose($fh);

    if (!empty($arr)) {
        file_put_contents( $path, ',' . json_encode($_POST) . ']' , FILE_APPEND| LOCK_EX);
    } else {
        file_put_contents( $path,  json_encode($_POST) . ']' , FILE_APPEND| LOCK_EX);
    }

}

echo file_get_contents($path);