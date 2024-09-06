import { products, weightsImages, figuresImages } from './data.js';

// Function to dynamically render products based on the page or selected category
function renderProducts(productsArray) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any existing content

    productsArray.forEach((product) => {
        const globalIndex = products.indexOf(product); // Get the index of the product in the global products array

        productContainer.innerHTML += `
            <a href="product.html?index=${globalIndex}" class="product-item">
                <img src="products /${product.image}" alt="${product.name}">
            </a>
        `;
    });
}

// Sidebar functionality
const menuIcon = document.querySelector('.menu-icon');
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

// Function to filter products based on category
function filterProducts(category) {
    let filteredProducts = [];

    switch (category) {
        case 'Himalaya Singing Bowl':
            filteredProducts = products.filter((product) => product.category === 'Himalaya Singing Bowl');
            break;
        case 'Himalaya Tribal Art':
            filteredProducts = products.filter((product) => product.category === 'Himalaya Tribal Art');
            break;
        case 'Himalaya Rituals Art':
            filteredProducts = products.filter((product) => product.category === 'Himalaya Ritual Art');
            break;
        case 'Himalaya Jewelry and Adornment':
            filteredProducts = products.filter((product) => product.category === 'Himalaya Jewelry and Adornment');
            break;
        default:
            filteredProducts = products;
            break;
    }
    renderProducts(filteredProducts);
}

// Function to handle category h3 click
function handleCategoryClick(event) {
    const selectedCategory = event.target.textContent.trim();
    filterProducts(selectedCategory);

    // Remove 'active' class from all h3 elements
    document.querySelectorAll('.category h3').forEach(h3 => {
        h3.classList.remove('active');
    });

    // Add 'active' class to the clicked h3 element
    event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes('weights.html')) {
        renderProducts(weightsImages);
    } else if (currentPage.includes('figures.html')) {
        renderProducts(figuresImages);
    } else {
        renderProducts(products);
    }

    // Add event listeners for category h3 elements
    const categoryItems = document.querySelectorAll('.category h3');
    categoryItems.forEach(item => {
        item.addEventListener('click', handleCategoryClick);
    });
});
