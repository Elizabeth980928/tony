document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Sending...';

      const serviceID = 'service_0w9fujj';
      const templateID = 'template_9u2gg5o';
      const publicKey = 'i9IgEiicy2n0VxDSY'; 

      emailjs.sendForm(serviceID, templateID, this, publicKey)
        .then(() => {
          btn.value = 'Send Email';
          alert('Your message has been sent succcessfully!');
          this.reset(); // ✅ Clears the form
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
});
