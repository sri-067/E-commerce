document.addEventListener('DOMContentLoaded', () => {
    // Retrieve search query from URL
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search');

    if (searchQuery) {
        console.log('Searching for:', searchQuery);
        filterProducts(searchQuery);
    }

    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');

    // Update cart count display
    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    // Add product to cart
    function addToCart(product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    }

    // Filter products based on search query
    function filterProducts(query) {
        document.querySelectorAll('.product-details').forEach(product => {
            const productName = product.getAttribute('data-product-name');
            if (!productName.toLowerCase().includes(query.toLowerCase())) {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    }

    // Event listener for add-to-cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productDetails = event.target.closest('.product-details');
            const productId = productDetails.getAttribute('data-product-id');
            const productName = productDetails.getAttribute('data-product-name');
            const productPrice = productDetails.getAttribute('data-product-price');

            const product = {
                id: productId,
                name: productName,
                price: parseFloat(productPrice)
            };

            addToCart(product);
        });
    });

    // Initial cart count update
    updateCartCount();
});
