<?php include('config/db.php');?>
<?php session_start();?>
<?php
$student_user_id = $SESSION['student_user_id'];
if(!isset($student_user_id)){
	header('location:login.php');
}

?>
<?php include('inc/header.php');?>
<div class="container">
	<div class="col-md-3">
		<h1>Student Sidebar</h1>
	</div>
	<div class="col-md-9">
		<h1 style="text-transform: uppercase;">Student Dashboard</h1>
	</div>
</div>
<?php include('inc/footer.php');?>


