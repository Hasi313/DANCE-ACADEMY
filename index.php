

<?php include ('inc/header.php');?>
<div class="container" style="width: 100%;">
<div id="my slideshow" class="slideshow slide" data-ride="slideshow">

  <!--Indicators-->
  <html>
<head>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="assets/img/has1.jpg" alt="Chania" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="assets/img/has2.jpg" alt="Chania" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="assets/img/has3.jpg"  alt="Chania" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>
</body>
</head>
</html>

 

<?php include ('inc/footer.php');?>