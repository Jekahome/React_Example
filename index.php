<?php


//Входной файл
// первый GET параметр это номер урока из папки lessons_book
//  http://react.loc/3
$request_uri= array_filter(explode('/',$_SERVER['REQUEST_URI']));
//sort($request_uri);
//print_r($request_uri);exit;

$folder_lessons='lessons_book/';
$include='Hello.html';
if(!empty($request_uri)){
    $include='';
    if(is_numeric($request_uri[1])){
        $include=$request_uri[1].'.html';
    }

    if(!file_exists($folder_lessons.$include))
        $include='Hello.html';
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Base</title>
    <!--
       <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
       <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
       <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
       -->
    <!-- <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> -->

     <script src="/reactbook-master/chapters/react/build/react-with-addons.js"></script>
     <script src="/reactbook-master/chapters/react/build/react-dom.js"></script>
    <!-- <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
     <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> -->



    <!--    materialize-->
    <!--  <link type="text/css" rel="stylesheet" href="/materialize/css/materialize.min.css"  media="screen,projection"/>-->
    <!-- <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"> -->




    <!-- Kube CSS -->
    <link rel="stylesheet" href="/kube.css">

  </head>
  <body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="/kube.js"></script>

  <!--    materialize-->

  <!--<script type="text/javascript" src="/materialize/js/materialize.min.js"></script>-->

  <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>-->
  <!-- Вывод Menu  -->



<a href="#" data-component="dropdown" data-target="#my-dropdown">MENU <span class="caret down"></span></a>
<div class="dropdown hide" id="my-dropdown">
      <a href="" class="close show-sm"></a>
      <ul>
      <?php
$files=glob("lessons_book/*");
$new_files=[];
foreach ($files as $file){
    $new_files[]=basename($file,'.html') ;
}
sort($new_files,SORT_NUMERIC);
foreach ($new_files as $file){
    echo "<li><a href='/".$file."'>".$file."</a></li>";
}
?>
      </ul>
  </div>



























<hr>
<!-- ----------  -->

<!-- Content Content  Content  Content  Content  Content  Content  Content  Content  -->
<?php  include $folder_lessons.$include;  ?>
<!-- Content Content  Content  Content  Content  Content  Content  Content  Content  -->
<script>




//    materialize
  /* $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) {  }, // A function to be called when sideNav is opened
        onClose: function(el) {  }, // A function to be called when sideNav is closed
    }
  );

$(document).ready(function() {
  $('select').material_select();
});
*/
</script>
<style>
    #app{
        border :1px solid black;
    }
</style>
</body>
</html>

