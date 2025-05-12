<?php
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT id, password FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        echo "Login successful";
    } else {
        echo "Invalid password";
    }
} else {
    echo "User not found";
}
?>
