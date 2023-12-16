<!doctype html>
<html lang="en">
<head>
<meta charset ="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stlesheet" href="assets/fontawesome/css/all.min.css">
<link rel="stylesheet" href ="assets/css/bootstrap.css">
<link rel="stylesheet" type="text/css" href ="assets/css/style.css">
<script type ="text/javascript" src="assets/js/jquery-1.12.4.js"></script>
<script type ="text/javascript" src="assets/js/bootstrap.js"></script>
<title>Indian Dance Academy | Home page </title>
</head>
<body>
<nav class ="navbar navbar-default">
<div class ="container-fluid" style="padding-left:25px;">
<div class ="navbar-header">
  
   <a class ="navbar-brand" href ="index.php"> Amazing Dance Academy </a>
<ul class="menubar">
<li><a href="index.php">Home</a></li>  
<li><a href="about.php">About</a></li>  
<li><a href="services.php">Our Services</a></li> 
<li><a href="staff.php">Our Instructors</a></li>  
<li><a href="contact.php">Contact Us</a></li>  
</ul>
</div>
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<ul class="nav navbar-nav navbar-right">
<li class="dropdown" style="display: none;">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Settings<span class="caret"></span></a>
	<ul class="dropdown-menu">
<li><a href="admin_dashboard.php">Admin</a></li>
<li><a href="logout.php">Logout</a></li>
</ul>
</li>
<li><a href="register.php">Register</a></li> 
<li><a href="login.php">Login</a></li> 
</ul>
</div>
</div>
</nav>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

<div class ="footer">
	<p> Amazing Classical Dance Academy</p>
</div>
<html>	