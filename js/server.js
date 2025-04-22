


function sendMail(event) {
  event.preventDefault(); // Stop form from refreshing

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_oia60jq";
  const templateID = "template_07s7hab";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      alert("Your message was sent successfully!");
      document.getElementById("contact-form").reset(); // Clear the form
    })
    .catch(err => console.error("Failed to send message:", err));
}

// Attach form submit listener
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", sendMail);
  }
});
