<?php

$path = __DIR__ . '/data.json';

if (file_exists($path)) {
    echo file_get_contents($path);
} else {
    echo json_encode([]);
}


