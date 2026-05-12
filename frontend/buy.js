const orderForm = document.getElementById('orderForm');
const message = document.getElementById('message');

orderForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const quantity = document.getElementById('quantity').value;

  const response = await fetch('http://localhost:5000/api/orders', {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
        name,
      email,
      quantity,
      coffee: 'Premium Cappuccino',
      price: 7
    })

  });

  const data = await response.json();

  if (data.success) {

    message.innerHTML = 'Order placed successfully';

    orderForm.reset();

  } else {

    message.innerHTML = 'Order failed';

  }

  });