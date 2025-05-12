<?php
$host = "127.0.0.1";
$port = 3307;
$user = "root";
$pass = "";
$db = "velvet_journal";

// Add port using "host:port"
$conn = new mysqli("$host:$port", $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
