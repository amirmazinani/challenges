<?php
$base = dirname(__FILE__);
$fonts = glob($base . '/*');
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Untitled Document</title>
    <link rel="stylesheet" type="text/css" href="/styles/lemoni/1.0.min.css"/>
    <link rel="stylesheet" type="text/css" href="/styles/fonts/1.0.min.css"/>
    <style>
        body > div {
            border: 1px solid #ccc;
            background: #fff;
            box-shadow: 0 0 5px #ccc;
            width: 80%;
            margin: auto;
        }
    </style>
</head>

<body class="-b-c-eee -d-r -mt-3">
<div class="-d-l -p-3 -mb-2">
    <h1 class="-fnt-s-h1">
        <a target="_blank" href="/fonts/icon">Icons</a>
    </h1>
</div>
<div class="-d-l -p-3 -mb-2">
    <h1 class="-fnt-s-h1">
        <a target="_blank" href="/fonts/fontello">Fontello</a>
    </h1>
</div>

<?php
foreach ($fonts as $dir) {
    if (is_dir($dir)) {
        $font_names = str_replace($base . '/', '', $dir);
        if (!in_array($font_names, ['icon', 'fontello'], true)) {
            ?>
            <div class="-fnt-<?= $font_names ?> -p-3 -mb-2">
                <h1 class="-fnt-s-h1 -mb-1">سلام</h1>

                <h2 class="-fnt-s-h2 -mb-1">روز بخیر</h2>

                <p class="-mb-1">
                    به متن تست از یک متن فارسی با فونت
                    <span class="-c-red"><?= $font_names ?></span>
                    که شما می توانید در یک وبسایت فارسی مشاهده
                    کنید.
                    خدایا به امید تو.
                </p>
                <p class="-d-l -mb-1">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type ... There are many variations of
                    passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                    injected humour, or randomised ...
                </p>
            </div>
            <?php
        }
    }
}
?>
</body>
</html>
