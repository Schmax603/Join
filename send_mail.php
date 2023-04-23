<?php

########### CONFIG ###############

$recipient = $_REQUEST["requesterEmail"]; #fill with user email 'requesterEmail'
$redirect = '/login/forgotPassword.html?msg=An email has been send to you.'; #loading file after email send

########### CONFIG END ###########



########### Intruction ###########   
#
#   This script has been created to send an email to the $recipient
#   
#  1) Upload this file to your FTP Server
#  2) Send a POST rewquest to this file, including
#     [name] The name of the sender (Absender)
#     [message] Message that should be send to you
#
##################################



###############################
#
#        DON'T CHANGE ANYTHING FROM HERE!
#
#        Ab hier nichts mehr ändern!
#
###############################

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $subject = "Reset Join Password " . $_POST['name'];
        $subject = '=?UTF-8?B?'.base64_encode($subject).'?='; // Codierung in 7 bit Code to show ä ö ü ... in subject
        
        $mailtext = '
		<html>
			<body>
				<a href="https://gruppe-534.developerakademie.net/login/newPassword.html">Click here</a> for reset password.
			</body>
		</html>
		';
        $headers = array(
            "MIME-Version" => "1.0",
            "Content-type" => "text/html; charset=UTF-8",
            "From" => "noreply@developerakademie.com",
        );

        mail($recipient, $subject, $mailtext, $headers);
        header("Location: " . $redirect); 

        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}
