let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartQuantity();
    alert(`${name} has been added to your cart!`);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $ ${item.price}`;
        cartItems.appendChild(li);

        total += item.price;
    });

    document.getElementById('total').textContent = total;
}

function updateCartQuantity() {
    const cartQuantity = document.getElementById('cart-quantity');
    if (cartQuantity) {
        const quantity = cart.length;
        cartQuantity.textContent = quantity > 0 ? quantity : '';
    }
}

function placeOrder(event) {
    event.preventDefault();

    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = 'thankyou.html';
}

window.onload = function() {
    displayCart();
    updateCartQuantity();

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', placeOrder);
    }
};
