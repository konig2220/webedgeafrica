<?php
if (_SERVER["REQUEST_METHOD"] == "POST")nom = htmlspecialchars(_POST['nom']);email = htmlspecialchars(_POST['email']);message = htmlspecialchars(_POST['message']);to = "tonemail@example.com";
    subject = "Nouveau message depuis le site WebEdge Africa";body = "Nom: nom:email\n\nMessage:\nmessage";headers = "From: email";

    if (mail(to, subject,body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Échec de l'envoi. Réessayez.";
    }
}
?>
