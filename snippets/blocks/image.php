<?php

$size = $block->size();
$customSize = $block->maxwidthvalue()->toInt() ? 'style="--max-width:'.$block->maxwidthvalue()->toInt().$block->maxwidthunit().';"' : '';
$thumb_name = $size;
$alignement = $block->alignement()->isNotEmpty() ? 'text-'.$block->alignement() : 'text-left';


if ($src = $block->image()->toFile()) {
    $imgRatio = str_replace(",", ".", 100 / $block->image()->toFile()->ratio());
}

?>


<?php if ($src) : ?>
    <figure class="reveal block-image <?= $size ?> <?= $alignement ?>" id="<?= $block->id() ?>"  >

        <div class="reveal-1 wrapper relative inline-block" <?= $customSize ?>>
            <picture class=" ratio-wrap" style="padding-top: <?= $imgRatio . "%" ?>">
                <source srcset="<?= $src->srcset($thumb_name) ?>" type="image/webp">
                <img loading="lazy" height="<?= $src->thumb($thumb_name)->height() ?>" width="<?= $src->thumb($thumb_name)->width() ?>" class="<?= $size ?>" src="<?= $src->thumb($thumb_name)->url() ?>" alt="<?= $block->alt() ?>">
            </picture>
        </div>
        <?php if ($block->caption()->isNotEmpty()) : ?>
        <figcaption class="reveal-2">
            <?= $block->caption() ?>
        </figcaption>
        <?php endif ?>
    </figure>
<?php endif ?>

