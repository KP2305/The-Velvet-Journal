<?php
$host = "sql313.infinityfree.com";
$port = 3306;
$user = "if0_38959135";
$pass = "Krisha2305";
$db = "if0_38959135_velvet_journal";

// Add port using "host:port"
$conn = new mysqli("$host:$port", $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

