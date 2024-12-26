// product-details.js
document.addEventListener("DOMContentLoaded", function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");

    // Example data, you can replace this with actual data or fetch from a server
    const products = {
        1: {
            name: "Van Heusen Men's Regular Fit Shirt",
            price: "₹5,999",
            description: "100% Cotton Regular Fit Long Sleeve Spread Collar Standard Length Neck style Dom Country of Origin India",
            images: ["Product images/Clothing/shirt1.jpg"],
            reviews: ["Great quality!", "Perfect fit."]
        },
        // Add other products here
    };

    const product = products[productId];
    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description;

        // Add images to the carousel
        const carouselImages = document.getElementById("carousel-images");
        product.images.forEach((image, index) => {
            const carouselItem = document.createElement("div");
            carouselItem.className = "carousel-item" + (index === 0 ? " active" : "");
            carouselItem.innerHTML = `<img src="${image}" class="d-block w-100" alt="Product Image">`;
            carouselImages.appendChild(carouselItem);
        });

        // Add reviews
        const reviewsContainer = document.getElementById("product-reviews");
        product.reviews.forEach(review => {
            const reviewItem = document.createElement("p");
            reviewItem.textContent = review;
            reviewsContainer.appendChild(reviewItem);
        });
    }
});
