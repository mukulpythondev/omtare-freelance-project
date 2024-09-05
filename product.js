// product.js

import {products} from './data.js'; // Import the products array

// Function to get product details based on the URL index
function renderProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index'); // Get the index from the URL
    console.log(index)
    if (index && products[index]) {
        const product = products[index];
        document.getElementById('product-image').src = `products /${product.image}`;
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-material').innerText = product.material;
        document.getElementById('product-description').innerText = product.description;
        document.getElementById('product-weight').innerText = product.weight;
        document.getElementById('article-number').innerText = product.articleNumber;
    } else {
        document.getElementById('product-container').innerHTML = `<p>Product not found.</p>`;
    }
}
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

// Open sidebar when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.style.right = '0'; // Slide in sidebar
});

// Close sidebar when close icon is clicked
closeIcon.addEventListener('click', () => {
    sidebar.style.right = '-100%'; // Slide out sidebar
});
// Call the function to render product details when the page loads
document.addEventListener('DOMContentLoaded', renderProductDetails);
