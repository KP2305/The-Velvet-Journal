<?php
include 'db.php';
session_start();

$user_id = $_SESSION['user_id'];
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "INSERT INTO entries (user_id, title, content) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iss", $user_id, $title, $content);

if ($stmt->execute()) {
    echo "Entry saved!";
} else {
    echo "Error saving entry";
}
?>
