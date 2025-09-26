// Products Data
const products = [
    {
        id: 1,
        name: "Lumina Soy Candles",
        description: "Sustainable soy wax candles with natural fragrances. Eco-friendly alternative to paraffin candles.",
        price: 299,
        image: "products/lunima.jpg",
        category: "candles",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Totva Tote Bags",
        description: "Stylish tote bags made from upcycled canvas banners. Perfect for daily use.",
        price: 40,
        image: "products/totva.jpg",
        category: "bags",
        badge: "Eco-Friendly"
    },
    {
        id: 3,
        name: "Niraa Goat Milk Soap",
        description: "Handmade goat milk soaps infused with vitamin E in coconut shell holders.",
        price: 150,
        image: "products/niraa.jpg",
        category: "crafts",
        badge: "Natural"
    },
    {
        id: 4,
        name: "Wypit Cloth Wipes",
        description: "Reusable cloth wipes for effective and sustainable shoe cleaning.",
        price: 110,
        image: "products/wypit.jpg",
        category: "crafts",
        badge: "Sustainable"
    },
    {
        id: 5,
        name: "Crunchware Edible Cutlery",
        description: "Edible cutlery as a zero-waste alternative to disposable plastics.",
        price: 220,
        image: "products/crunchware.jpg",
        category: "food",
        badge: "Zero Waste"
    },
    {
        id: 6,
        name: "Vayanna Fabric Earrings",
        description: "Unique handcrafted earrings made from fabric for sustainable fashion.",
        price: 180,
        image: "products/vayana.jpg",
        category: "crafts",
        badge: "Handmade"
    },
    {
        id: 7,
        name: "Fable Banana Fiber Bookmarks",
        description: "Eco-friendly bookmarks made from durable and attractive banana fiber.",
        price: 60,
        image: "products/fable.jpg",
        category: "crafts",
        badge: "Eco-Friendly"
    },
    {
        id: 8,
        name: "Chocobons (5 pieces)",
        description: "Healthy chocolates with nutritious and wholesome stuffing.",
        price: 100,
        image: "products/cocoons.jpg",
        category: "food",
        badge: "Healthy"
    },
    {
        id: 9,
        name: "Bee Bliss Brownies",
        description: "Delicious ragi brownies naturally sweetened with honey.",
        price: 50,
        image: "products/brownies.jpg",
        category: "food",
        badge: "Natural"
    },
    {
        id: 10,
        name: "Jute Belle Handicrafts",
        description: "Handcrafted baskets, coasters, keychains from eco-friendly jute yarn.",
        price: 250,
        image: "products/jute belle.jpg",
        category: "crafts",
        badge: "Artisan Made"
    },
    {
        id: 11,
        name: "Lumina Premium Candles",
        description: "Premium collection of handcrafted soy candles with exotic fragrances.",
        price: 280,
        image: "products/lumina2.jpg",
        category: "candles",
        badge: "Premium"
    },
    {
        id: 12,
        name: "Lumina Luxury Candles",
        description: "Luxury line of artisan candles with long-lasting natural scents.",
        price: 350,
        image: "products/lumina3.jpg",
        category: "candles",
        badge: "Luxury"
    },
    {
        id: 13,
        name: "Crunchware Cutlery Set",
        description: "Complete set of edible cutlery for eco-conscious dining experiences.",
        price: 220,
        image: "products/crunchware2.jpg",
        category: "food",
        badge: "Eco Set"
    },
    {
        id: 14,
        name: "Jute Belle Basket Collection",
        description: "Beautiful handwoven baskets perfect for home organization and decor.",
        price: 200,
        image: "products/jute belle2.jpg",
        category: "crafts",
        badge: "Home Decor"
    },
    {
        id: 15,
        name: "Jute Belle Coaster Set",
        description: "Elegant coaster set made from premium jute fibers for your dining table.",
        price: 120,
        image: "products/jute belle3.jpg",
        category: "crafts",
        badge: "Table Decor"
    },
    {
        id: 16,
        name: "Jute Belle Keychain Collection",
        description: "Cute and durable keychains crafted from sustainable jute materials.",
        price: 80,
        image: "products/jute belle4.jpg",
        category: "crafts",
        badge: "Accessories"
    },
    {
        id: 17,
        name: "Vayanna Designer Earrings",
        description: "Designer collection of fabric earrings with contemporary patterns.",
        price: 200,
        image: "products/vayana2.jpg",
        category: "crafts",
        badge: "Designer"
    },
    {
        id: 18,
        name: "Vayanna Statement Earrings",
        description: "Bold statement earrings that make a fashion statement while being eco-friendly.",
        price: 250,
        image: "products/vayana3.jpg",
        category: "crafts",
        badge: "Statement"
    },
    {
        id: 19,
        name: "Vayanna Elegant Earrings",
        description: "Elegant and sophisticated earrings perfect for formal occasions.",
        price: 280,
        image: "products/vayana4.jpg",
        category: "crafts",
        badge: "Elegant"
    }
];

// Cart and State
let cart = [];
let currentCategory = 'all';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBadge = document.getElementById('cartBadge');
const cartBody = document.getElementById('cartBody');
const cartTotal = document.getElementById('cartTotal');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartUI();
    initializeMobileMenu();
});

// Mobile menu functionality
function initializeMobileMenu() {
    window.toggleMobileMenu = function() {
        // Create mobile menu if it doesn't exist
        let mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.id = 'mobile-menu';
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <div class="mobile-menu-content">
                    <button class="mobile-menu-close" onclick="toggleMobileMenu()">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="mobile-menu-items">
                        <a href="index.html" class="mobile-nav-item">Home</a>
                        <a href="index.html#about" class="mobile-nav-item">About</a>
                        <a href="index.html#projects" class="mobile-nav-item">Projects</a>
                        <a href="store.html" class="mobile-nav-item active">
                            <i class="fas fa-store"></i> Store
                        </a>
                        <a href="index.html#contact" class="mobile-nav-item">Contact</a>
                        <div class="mobile-menu-actions">
                            <button class="mobile-search-btn" onclick="toggleSearch(); toggleMobileMenu();">
                                <i class="fas fa-search"></i> Search
                            </button>
                            <button class="mobile-cart-btn" onclick="toggleCart(); toggleMobileMenu();">
                                <i class="fas fa-shopping-bag"></i> Cart (<span id="mobileMenuCartBadge">0</span>)
                            </button>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(mobileMenu);
        }
        mobileMenu.classList.toggle('active');
        
        // Update mobile cart badges
        const mobileCartBadge = document.getElementById('mobileCartBadge');
        const mobileMenuCartBadge = document.getElementById('mobileMenuCartBadge');
        if (mobileCartBadge || mobileMenuCartBadge) {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            if (mobileCartBadge) mobileCartBadge.textContent = totalItems;
            if (mobileMenuCartBadge) mobileMenuCartBadge.textContent = totalItems;
        }
    };
}

// Event Listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
            setActiveCategory(this);
        });
    });

    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', function() {
        sortProducts(this.value);
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        searchProducts(this.value);
    });
}

// Render Products
function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-badge">${product.badge}</div>
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price}</div>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    return card;
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
}

// Set Active Category
function setActiveCategory(activeCard) {
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    activeCard.classList.add('active');
}

// Sort Products
function sortProducts(sortBy) {
    let sortedProducts = [...products];
    
    if (currentCategory !== 'all') {
        sortedProducts = sortedProducts.filter(product => product.category === currentCategory);
    }
    
    switch(sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    renderProducts(sortedProducts);
}

// Search Products
function searchProducts(query) {
    if (!query.trim()) {
        filterByCategory(currentCategory);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    renderProducts(filteredProducts);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartBadge.textContent = totalItems;
    cartBadge.style.display = totalItems > 0 ? 'block' : 'none';
    cartTotal.textContent = `₹${total}`;
    
    // Update mobile cart badges
    const mobileCartBadge = document.getElementById('mobileCartBadge');
    if (mobileCartBadge) {
        mobileCartBadge.textContent = totalItems;
        mobileCartBadge.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    const mobileMenuCartBadge = document.getElementById('mobileMenuCartBadge');
    if (mobileMenuCartBadge) {
        mobileMenuCartBadge.textContent = totalItems;
    }
    
    renderCartItems();
}

// Render Cart Items
function renderCartItems() {
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        return;
    }
    
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: auto; background: #ef4444; color: white;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle Cart
function toggleCart() {
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// Toggle Search
function toggleSearch() {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
    }
}

// Toggle Wishlist (placeholder)
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`${product.name} added to wishlist!`);
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #fbbf24;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: all 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Show Checkout Popup
function showCheckoutPopup() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    document.getElementById('checkoutOverlay').classList.add('active');
}

// Close Checkout Popup
function closeCheckoutPopup() {
    document.getElementById('checkoutOverlay').classList.remove('active');
}

// Download Order PDF
function downloadOrderPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(251, 191, 36);
    doc.text('ENACTUS JU STORE', 20, 30);
    doc.setFontSize(16);
    doc.text('Order Summary', 20, 45);
    
    // Date
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 60);
    
    // Cart Items
    let yPosition = 80;
    doc.setFontSize(14);
    doc.text('Items Ordered:', 20, yPosition);
    yPosition += 15;
    
    let totalAmount = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        
        doc.setFontSize(11);
        doc.text(`${index + 1}. ${item.name}`, 25, yPosition);
        doc.text(`Qty: ${item.quantity}`, 25, yPosition + 10);
        doc.text(`Price: Rs.${item.price} each`, 25, yPosition + 20);
        doc.text(`Subtotal: Rs.${itemTotal}`, 25, yPosition + 30);
        
        yPosition += 45;
        
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 30;
        }
    });
    
    // Total
    yPosition += 10;
    doc.setFontSize(14);
    doc.setTextColor(251, 191, 36);
    doc.text(`Total Amount: Rs.${totalAmount}`, 20, yPosition);
    
    // Contact Info
    yPosition += 25;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Contact Information:', 20, yPosition);
    doc.text('Email: enactus@jainuniversity.ac.in', 20, yPosition + 15);
    doc.text('Instagram: @enactus_ju', 20, yPosition + 25);
    
    // Footer
    yPosition += 40;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Please share this order summary with us to proceed with your purchase.', 20, yPosition);
    doc.text('We will contact you within 24 hours for payment and delivery details.', 20, yPosition + 10);
    
    // Download
    doc.save(`Enactus-Order-${new Date().getTime()}.pdf`);
    
    showNotification('Order summary downloaded successfully!');
}

// Close overlays when clicking outside
document.addEventListener('click', function(e) {
    if (e.target === cartOverlay) {
        toggleCart();
    }
    if (e.target === searchOverlay) {
        toggleSearch();
    }
    if (e.target.id === 'checkoutOverlay') {
        closeCheckoutPopup();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
        if (searchOverlay.classList.contains('active')) {
            toggleSearch();
        }
        if (document.getElementById('checkoutOverlay').classList.contains('active')) {
            closeCheckoutPopup();
        }
    }
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
    }
});