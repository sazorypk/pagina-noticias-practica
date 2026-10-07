const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const name = contactForm.elements.nombre.value.trim();
    formMessage.textContent = `¡Gracias, ${name}! Recibimos tus datos.`;
    contactForm.reset();
  });
}
