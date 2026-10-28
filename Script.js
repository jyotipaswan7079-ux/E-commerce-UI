// E-commerce Website JavaScript

let cart = [];

const products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 499,
        image: "https://placehold.co/200x200?text=T-Shirt"
    },
    {
        id: 2,
        name: "Shoes",
        price: 999,
        image: "https://placehold.co/200x200?text=Shoes"
    },
    {
        id: 3,
        name: "Watch",
        price: 799,
        image: "https://placehold.co/200x200?text=Watch"
    },
    {
        id: 4,
        name: "Bag",
        price: 699,
        image: "https://placehold.co/200x200?text=Bag"
    }
];

// Display products
function displayProducts(productList = products) {
    const container = document.getElementById("product-list");

    if (!container) return;

    container.innerHTML = "";

    productList.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

// Add product to cart
function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (product) {
        cart.push(product);
        updateCart();
        alert(product.name + " added to cart!");
    }
}

// Update cart and total price
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (totalPrice) {
        const total = cart.reduce(
            (sum, product) => sum + product.price,
            0
        );

        totalPrice.textContent = "₹" + total;
    }

    if (cartItems) {
        cartItems.innerHTML = "";

        cart.forEach((product, index) => {
            cartItems.innerHTML += `
                <li>
                    ${product.name} - ₹${product.price}
                    <button onclick="removeFromCart(${index})">
                        Remove
                    </button>
                </li>
            `;
        });
    }
}

// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Search products
function searchProducts() {
    const searchInput = document.getElementById("search");

    if (!searchInput) return;

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );

    displayProducts(filteredProducts);
}

// Show products when page loads
document.addEventListener("DOMContentLoaded", function () {
    displayProducts();
    updateCart();
});

