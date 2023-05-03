<?php

Kirby::plugin('baptiste/kirby-image-block', [
    'blueprints' => [
        'blocks/image' => __DIR__ . '/blueprints/blocks/image.yml',
    ],
    'snippets' => [
        'blocks/image' => __DIR__ . '/snippets/blocks/image.php',
    ],
    'translations' => [
        'fr' => require 'languages/fr.php'
    ]
]);