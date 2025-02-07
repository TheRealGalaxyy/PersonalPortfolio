
(function() {
    emailjs.init("JUk9-axTr4XRXqNIS");
})();


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var formData = new FormData(this); 

    emailjs.sendForm("service_17tzkfh", "template_rixycb8", formData)
        .then(function(response) {
        alert("Message envoyé avec succès!");
        }, function(error) {
        alert("Erreur lors de l'envoi du message.");
        });
});

