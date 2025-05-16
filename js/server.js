document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      btn.value = 'Sending...';

      const serviceID = 'service_48gfgtc';
      const templateID = 'template_ha9c9cc';
      const publicKey = 'Uf0so-hutVvGrIDxC'; 

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
