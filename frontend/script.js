const contactForm = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    responseMessage.innerText = result.message;
    contactForm.reset();
  } catch (error) {
    responseMessage.innerText = 'Something went wrong';
  }
});