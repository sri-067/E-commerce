// Example of how to retrieve the search query on product_page.html
const params = new URLSearchParams(window.location.search);
const searchQuery = params.get('search');

if (searchQuery) {
    // Use the search query to filter or display search results
    console.log('Searching for:', searchQuery);
}
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function addToCart(product) {
        cart.push(product);
        updateCartCount();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productDetails = event.target.closest('.product-details');
            const productId = productDetails.getAttribute('data-product-id');
            const productName = productDetails.getAttribute('data-product-name');
            const productPrice = productDetails.getAttribute('data-product-price');
            
            const product = {
                id: productId,
                name: productName,
                price: productPrice
            };

            addToCart(product);
        });
    });
});
