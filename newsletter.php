<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'plugins/phpmailer/src/Exception.php';
require 'plugins/phpmailer/src/PHPmailer.php';
require 'plugins/phpmailer/src/SMTP.php';
require 'environment.php';

$usrEmail = $_POST['email'];

$email_subject = "New Newsletter joinee.";
$email_body = "Email: " . $usrEmail . " is subscribed to newsletter";

if (isset($_POST["send"])) {
  $mail = new PHPMailer(true);

  $mail->isSMTP();
  $mail->Host = "smtp.gmail.com";
  $mail->SMTPAuth = true;
  $mail->Username = $_ENV["SYS_EMAIL"]; //our Gmail
  $mail->Password = $_ENV["SYS_PASSWORD"]; // Gmail App Psswords
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->setFrom($usrEmail);

  $mail->addAddress($_ENV["SYS_EMAIL"], "noreply"); //Our Gmail

  $mail->isHTML(true);

  $mail->Subject = $email_subject;
  $mail->Body = $email_body;

  $mail->send();

  echo "
    <script>
    alert('We have added you to our mailing list');
    document.location.href = 'cheers.html';
    </script>
    ";
}
