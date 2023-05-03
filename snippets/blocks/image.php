<?php

$size    = $block->size();
$thumb_name = $size->toString();


if ($src = $block->image()->toFile()) {
    $imgRatio = str_replace(",", ".", 100 / $block->image()->toFile()->ratio());
}

?>
<?php if ($src) : ?>
    <figure class="block-image <?= $size ?>">
        <div class="relative inline-block">
            <picture class="ratio-wrap" style="padding-top: <?= $imgRatio . "%" ?>">
                <source srcset="<?= $src->srcset($thumb_name) ?>" type="image/webp">
                <img loading="lazy" height="<?= $src->height() ?>" width="<?= $src->width() ?>" class="<?= $size ?>" src="<?= $src->thumb($thumb_name)->url() ?>" alt="<?= $block->alt() ?>">
            </picture>
            <a href="<?= $src->url() ?>" class="button-open" title="Ouvrir l'image en plein écran">
                <svg viewBox="0 0 24 24" id="open_in_new" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" />
                </svg>
            </a>
        </div>

        <?php if ($block->caption()->isNotEmpty()) : ?>
            <figcaption>
                <?= $block->caption() ?>
            </figcaption>
        <?php endif ?>
    </figure>
<?php endif ?>