<?php

include('config/db.php');
session_start();
if(isset($POST['submit'])){

$email = mysqli_real_escape_string($conn, $POST['email']);
$password = mysqli_real_escape_string($conn, sha1($POST['password']));
$query = "SELECT * FROM tbl_users WHERE email = '$email' AND password = '$password'";
$getUser = mysqli_query($conn, $query);

if(mysqli_num_rows($getUser) > 0){
	$row = mysqli_fetch_assoc($getUser);
	if($row['user_role_id'] == '1'){

		$SESSION['username'] = $row['username'];
		$SESSION['email'] = $row['email'];
		$SESSION['admin_user_id'] = $row['user_id'];
		$SESSION['admin_role_id'] = $row['user_role_id'];
		header('Location:admin_dashboard.php');


	}
	else if($row['user_role_id'] == '2'){
		$SESSION['username'] = $row['username'];
		$SESSION['email'] = $row['email'];
		$SESSION['instructor_user_id'] = $row['user_id'];
		$SESSION['instructor_role_id'] = $row['user_role_id'];
		header('Location:instructor_dashboard.php');

	}
	else if($row['user_role_id'] == '3'){
		$SESSION['username'] = $row['username'];
		$SESSION['email'] = $row['email'];
		$SESSION['student_user_id'] = $row['user_id'];
		$SESSION['student_role_id'] = $row['user_role_id'];
		header('Location:student_dashboard.php');
	}
	}else{
	$message[] = 'incorrect email or password!';
}

}
?>
<?php include('inc/header.php');?>
<div class="container">
<?php
if(isset($message)){
	foreach($message as $msg){
		echo '
		<div class="message">
		<span>'.$msg.'</span>
		<i class="fas fa-times" onclick="this.parentElement.remove();"></i>
		</div>
		';
	}
	}
	?>
	<div class="row justify-content-between">
		<div class="col-md-4 col-md-offset-4">
			<div class="panel panel-default" style="margin-top: 20px;">
				<div class="panel-heading"><strong>USER LOGIN</strong></div>
				<div class="panel-body">
					<form method="post" action="login.php">
						<div class="form-group">
							<label>Email</label>
							<input type="text" name="email" class="form-control" required="" placeholder="Email">
						</div>
						<div class="form-group">
							<label>Password</label>
							<input type="password" name="password" class="form-control" required="" placeholder="Password">
						</div>
						<input type="submit" name="submit" value="Login now" class="btn success-btn" style="width: 100%;">
						<p>Don't have an account? <a href="register.php">Register now</a></p>
					</form>
				</div>
			</div>
		</div>
	</div>

<?php include('inc/footer.php');?>
