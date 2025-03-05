document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("Nb-se0QXkVLz1JsfW");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_17tzkfh", "template_rixycb8", params)
            .then(function (response) {
                alert("Message envoyé avec succès !");
                document.getElementById("contact-form").reset();
            }, function (error) {
                alert("Erreur lors de l'envoi du message : " + error.text);
            });
    });
});
