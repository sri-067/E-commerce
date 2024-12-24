document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const proceedToBuyButton = document.querySelector('.proceed-to-buy');

    // Load cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from local storage:', cart); // Debugging log

    // Display cart items and update total price
    displayCartItems(cart);
    updateTotalPrice(cart);
    updateCartCount(cart);

    // Function to display cart items
    function displayCartItems(cart) {
        cartItemsContainer.innerHTML = ''; // Clear the cart display first
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((product, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <div class="cart-item-info">
                        <h3>${product.name}</h3>
                        <p>Price: ₹${product.price.toFixed(2)}</p>
                        <button class="remove-from-cart" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            // Add event listeners for the remove buttons
            document.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', () => {
                    const index = button.dataset.index;
                    removeProductFromCart(index);
                });
            });
        }
    }

    // Function to remove a product from the cart
    function removeProductFromCart(index) {
        cart.splice(index, 1); // Remove the product at the specified index
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
        displayCartItems(cart);
        updateTotalPrice(cart);
        updateCartCount(cart);
    }

    // Function to update the total price
    function updateTotalPrice(cart) {
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
    }

    // Event listener for the "Proceed to Buy" button
    proceedToBuyButton.addEventListener('click', () => {
        alert('Proceeding to buy');
        // Clear the cart from localStorage
        localStorage.removeItem('cart');
        cart = []; // Reset cart in memory
        displayCartItems(cart);
        updateTotalPrice(cart);
        updateCartCount(cart);
    });

    // Function to update the cart item count in the header or navigation
    function updateCartCount(cart) {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }
});
function displayCartItems(cart) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price.toFixed(2)}</p>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners for the remove buttons
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            removeProductFromCart(index);
        });
    });
}
