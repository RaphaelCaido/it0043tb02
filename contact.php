<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Example: Send email (configure your mail server)
    $to = "your-email@example.com";
    $subject = "Portfolio Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
