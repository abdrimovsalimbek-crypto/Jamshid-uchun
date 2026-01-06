// Sample data for the website
const menuItems = [
    { id: 1, name: 'Osh', description: 'An'anaviy osh', price: '35,000 so\'m', image: 'https://source.unsplash.com/300x200/?plov' },
    { id: 2, name: 'Manti', description: 'Qo\'y go\'shtidan tayyorlangan manti', price: '30,000 so\'m', image: 'https://source.unsplash.com/300x200/?dumpling' },
    { id: 3, name: 'Shashlik', description: 'Tovuq va mol go\'shtidan shashlik', price: '25,000 so\'m', image: 'https://source.unsplash.com/300x200/?kebab' },
    { id: 4, name: 'Lag\'mon', description: 'Uyda tayyorlangan lag\'mon', price: '32,000 so\'m', image: 'https://source.unsplash.com/300x200/?noodles' },
    { id: 5, name: 'Chuchvara', description: 'Qo\'limizda tayyorlangan chuchvara', price: '28,000 so\'m', image: 'https://source.unsplash.com/300x200/?dumpling' },
    { id: 6, name: 'Somsa', description: 'Tandirda pishirilgan somsa', price: '15,000 so\'m', image: 'https://source.unsplash.com/300x200/?samosa' }
];

const staffMembers = [
    { id: 1, name: 'Jamshid Ismoilov', position: 'Bosh oshpaz', image: 'https://source.unsplash.com/200x200/?chef' },
    { id: 2, name: 'Dilfuza Xasanova', position: 'Ofitsiant', image: 'https://source.unsplash.com/200x200/?waitress' },
    { id: 3, name: 'Shoxrux Yusupov', position: 'Barmen', image: 'https://source.unsplash.com/200x200/?barman' },
    { id: 4, name: 'Zarina Karimova', position: 'Ofitsiant', image: 'https://source.unsplash.com/200x200/?waitress,portrait' }
];

const products = [
    { id: 1, name: 'Non', price: '5,000 so\'m', image: 'https://source.unsplash.com/200x200/?bread' },
    { id: 2, name: 'Salat', price: '15,000 so\'m', image: 'https://source.unsplash.com/200x200/?salad' },
    { id: 3, name: 'Ichimliklar', price: '10,000 so\'m', image: 'https://source.unsplash.com/200x200/?drink' },
    { id: 4, name: 'Shirinliklar', price: '20,000 so\'m', image: 'https://source.unsplash.com/200x200/?dessert' }
];

// Load food items into the grid
function loadFoodItems() {
    const foodContainer = document.getElementById('food-items');
    menuItems.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.className = 'card';
        foodItem.innerHTML = `
            <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <p class="card-text"><strong>${item.price}</strong></p>
                <button class="btn btn-primary w-100" onclick="addToOrder(${item.id})">Buyurtma berish</button>
            </div>
        `;
        foodContainer.appendChild(foodItem);
    });
}

// Load staff members
function loadStaffMembers() {
    const staffContainer = document.getElementById('staff-members');
    staffMembers.forEach(staff => {
        const staffMember = document.createElement('div');
        staffMember.className = 'col-md-3 col-sm-6 mb-4';
        staffMember.innerHTML = `
            <div class="card text-center h-100">
                <img src="${staff.image}" class="card-img-top rounded-circle w-50 mx-auto mt-3" alt="${staff.name}">
                <div class="card-body">
                    <h5 class="card-title">${staff.name}</h5>
                    <p class="card-text text-muted">${staff.position}</p>
                </div>
            </div>
        `;
        staffContainer.appendChild(staffMember);
    });
}

// Load products
function loadProducts() {
    const productsContainer = document.getElementById('product-items');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'col-md-3 col-sm-6 mb-4';
        productItem.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text"><strong>${product.price}</strong></p>
                </div>
            </div>
        `;
        productsContainer.appendChild(productItem);
    });
}

// Add item to order
function addToOrder(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (item) {
        alert(`Siz "${item.name}" dan buyurtma berdingiz! Narxi: ${item.price}`);
        // Here you would typically add the item to an order list or cart
    }
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.');
    this.reset();
});

// Initialize the page
window.onload = function() {
    loadFoodItems();
    loadStaffMembers();
    loadProducts();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};
