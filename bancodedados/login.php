<?php
session_start();
include('db-connect.php');

if(empty($_POST['username']) || empty($_POST['password'])) {
    header('Location: index.php');
    exit();
}

$username = mysqli_real_escape_string($connect, $_POST['username']);
$password = mysqli_real_escape_string($connect, $_POST['password']);
 
$sql = "SELECT * FROM usuarios WHERE username = '{$username}' AND password = md5('{$password}')";

$resultado = mysqli_query($connect, $sql);
if(mysqli_num_rows($resultado) > 0) {
    $_SESSION['usermane'] = $username;
    header('Location: menu.php');
    exit();
} else {
    header('Location: index.php');
    exit();
}

