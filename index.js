import { products, weightsImages, figuresImages } from './data.js';

// Function to dynamically render products based on the page
function renderProducts(productsArray, isSubset = false) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any existing content

    productsArray.forEach((product, subsetIndex) => {
        const globalIndex = products.indexOf(product); // Get the index of the product in the global products array

        productContainer.innerHTML += `
            <a href="product.html?index=${globalIndex}" class="product-item">
                <img src="products /${product.image}" alt="${product.name}">
            </a>
        `;
    });
}

// Sidebar functionality
// Selecting elements
const menuIcon = document.querySelector('.menu-icon'); // Use class if you're using .menu-icon in CSS
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

// Open sidebar when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.style.right = '0'; // Slide in the sidebar by changing the 'right' property
});

// Close sidebar when close icon is clicked
closeIcon.addEventListener('click', () => {
    sidebar.style.right = '-100%'; // Slide out the sidebar by resetting the 'right' property
});


document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('weights.html')) {
        renderProducts(weightsImages);
    } else if (currentPage.includes('figures.html')) {
        renderProducts(figuresImages);
    } else {
        renderProducts(products);
    }
});
