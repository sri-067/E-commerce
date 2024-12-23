document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const proceedToBuyButton = document.querySelector('.proceed-to-buy');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Loaded cart from local storage:', cart); // Debugging log
    displayCartItems(cart);
    updateTotalPrice(cart);

    function displayCartItems(cart) {
        cartItemsContainer.innerHTML = '';
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

    function removeProductFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Remove the product at the specified index
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(cart);
        updateTotalPrice(cart);
        updateCartCount();
    }

    function updateTotalPrice(cart) {
        const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
        totalPriceElement.textContent = `₹${totalPrice.toFixed(2)}`;
    }

    proceedToBuyButton.addEventListener('click', () => {
        alert('Proceeding to buy');
        // Clear the cart
        localStorage.removeItem('cart');
        displayCartItems([]);
        updateTotalPrice([]);
        updateCartCount();
    });

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    }
});

