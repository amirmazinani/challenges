<?php $tld = PHP_OS !== 'WINNT' ? 'ir' : 'w3r' ?>
<!doctype html>
<html ng-app="challenges" ng-controller="main">
<head>
    <title>Challenges</title>
    <!--<link rel="shortcut icon" href="/favicon.ico?ver=1" />-->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index,follow" />
    <link rel="stylesheet" type="text/css" href="//lemoni.<?= $tld ?>/styles/fonts/v3.1.0.min.css" />
    <link rel="stylesheet" type="text/css" href="//lemoni.<?= $tld ?>/styles/lemoni/v3.1.0.min.css" />
    <link rel="stylesheet" type="text/css" href="//lemoni.<?= $tld ?>/styles/grid/flex/v3.1.0.min.css" />
    <link rel="stylesheet" type="text/css" href="/styles/styles.css" />
</head>
<body class="-d-r -fnt-sahel">

<div ng-view></div>






<script src="https://code.angularjs.org/1.7.5/angular.min.js"></script>
<script src="https://code.angularjs.org/1.7.5/angular-route.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-css/1.0.8/angular-css.min.js"></script>
<script src="/scripts/scripts.js"></script>
<noscript>
    <style type="text/css">
        body > *:not(noscript) {
            display: none !important;
        }
    </style>
    <main>
        <p class=" -p-15 -m-15 -b-c-orange-3 -c-white -d-l -li-h-15 -brd">
            JavaScript must be enabled in order for you to use service in standard view.
            However, it seems that JavaScript is either disabled or not supported by your browser.
            To use standard view, enable JavaScript by changing your browser options, then try again.
        </p>
    </main>
</noscript>
</body>
</html>