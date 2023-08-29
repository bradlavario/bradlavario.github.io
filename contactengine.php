<?php


$Name = Trim(stripslashes($_POST['Name'])); 
$Tel = Trim(stripslashes($_POST['Tel'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 
$Date = date('l jS \of F Y h:i:s A');



// prepare text to write

$Body = "";
$Body .= $Date;
$Body .= "\n";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";
$Body .= " ";
$Body .= "\n";

// write text to file

$myFile = "mail.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = $Body;
fwrite($fh, $stringData);
fclose($fh);



// redirect to success page 

print "<meta http-equiv=\"refresh\" content=\"0;URL=index.php\">";



?>
