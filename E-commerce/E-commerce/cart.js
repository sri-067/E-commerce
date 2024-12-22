// Initialize an empty cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to render the cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let total = 0;

    cart.forEach(item => {
        // Create a cart item
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += parseFloat(item.price);
    });

    totalAmount.textContent = total.toFixed(2);
}

// Function to handle removing items from the cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render the cart
    updateCartCount(); // Update the cart count
}

// Handle the remove buttons
document.getElementById('cart-items').addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-from-cart')) {
        const id = event.target.getAttribute('data-id');
        removeFromCart(id);
    }
});

// Handle Proceed to Buy button click
document.getElementById('proceed-to-buy').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        window.location.href = 'checkout.html'; // Redirect to checkout page
    }
});

// Initial rendering of the cart
renderCart();
updateCartCount();

// Code to handle adding items to the cart (called in Hackathon.js from product page)
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    updateCartCount(); // Update cart count in the header
}
