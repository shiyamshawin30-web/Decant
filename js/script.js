// --- MOCK DATA (For Visuals) ---
const mockProducts = [
    {
        id: '1',
        name: 'My Way Floral',
        brand: 'Giorgio Armani',
        type: 'Eau de Parfum',
        price: 40350,
        oldPrice: 45000,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '90ml']
    },
    {
        id: '2',
        name: 'My Euphoria EDP',
        brand: 'Calvin Klein',
        type: 'Eau de Parfum',
        price: 24000,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['30ml', '50ml', '100ml']
    },
    {
        id: '3',
        name: 'Sì Passione',
        brand: 'Giorgio Armani',
        type: 'Eau de Parfum',
        price: 43400,
        oldPrice: 54250,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['30ml', '50ml', '100ml']
    },
    {
        id: '4',
        name: 'Libre',
        brand: 'YSL',
        type: 'Eau de Parfum',
        price: 29300,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['30ml', '50ml', '90ml']
    },
    {
        id: '5',
        name: 'Sauvage',
        brand: 'Dior',
        type: 'Eau de Parfum',
        price: 45000,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['60ml', '100ml', '200ml']
    },
    {
        id: '6',
        name: 'Bleu de Chanel',
        brand: 'Chanel',
        type: 'Parfum',
        price: 52000,
        category: 'Fragrance',
        featured: true,
        bestSeller: true,
        image: 'https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '7',
        name: 'Eros',
        brand: 'Versace',
        type: 'Eau de Toilette',
        price: 32000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '8',
        name: 'Good Girl',
        brand: 'Carolina Herrera',
        type: 'Eau de Parfum',
        price: 48000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '80ml']
    },
    {
        id: '9',
        name: 'Aventus',
        brand: 'Creed',
        type: 'Eau de Parfum',
        price: 85000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '10',
        name: 'Flowerbomb',
        brand: 'Viktor&Rolf',
        type: 'Eau de Parfum',
        price: 39000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '11',
        name: 'L\'Homme Ideal',
        brand: 'Guerlain',
        type: 'Eau de Parfum',
        price: 31000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '12',
        name: 'Black Opium',
        brand: 'YSL',
        type: 'Eau de Parfum',
        price: 37500,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1583467875263-d50dec37a88c?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['30ml', '50ml', '90ml']
    },
    {
        id: '13',
        name: 'Light Blue',
        brand: 'Dolce & Gabbana',
        type: 'Eau de Toilette',
        price: 28000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '14',
        name: 'Invictus',
        brand: 'Paco Rabanne',
        type: 'Eau de Toilette',
        price: 31500,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '15',
        name: 'One Million',
        brand: 'Paco Rabanne',
        type: 'Eau de Toilette',
        price: 34000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    },
    {
        id: '16',
        name: 'Jadore',
        brand: 'Dior',
        type: 'Eau de Parfum',
        price: 49000,
        category: 'Fragrance',
        featured: true,
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=600',
        sizes: ['50ml', '100ml']
    }
];

let allProducts = [...mockProducts];

// --- GLOBAL OBSERVER FOR SCROLL ANIMATIONS ---
const observerOptions = { threshold: 0.05, rootMargin: "0px 0px 50px 0px" };
window.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderBestSellers();
    renderMainGrid();
    
    // Observe initial static elements
    document.querySelectorAll('.section-title, .scroll-fade').forEach(el => window.observer.observe(el));

    // Navbar Scroll Effect
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Hero Text Fade Out on Scroll
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 20) { 
                heroContent.classList.add('fade-out');
            } else {
                heroContent.classList.remove('fade-out');
            }
        });
    }

    // Auto-scroll Best Sellers (Optional but adds "cool animation" vibe)
    const track = document.getElementById('bestSellersTrack');
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });
        track.addEventListener('mouseleave', () => { isDown = false; });
        track.addEventListener('mouseup', () => { isDown = false; });
        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        });
    }
});

// --- RENDER FUNCTIONS ---

function createProductCard(p) {
    const hasDiscount = p.oldPrice && p.oldPrice > p.price;
    const sizesHtml = p.sizes.map((size, idx) => `
        <button class="ml-btn ${idx === 1 ? 'active' : ''}" onclick="selectSize(this)">${size}</button>
    `).join('');

    return `
        <div class="product-card scroll-fade">
            <div style="position: absolute; top: 15px; right: 15px; z-index: 10;">
                <i class="far fa-heart" style="cursor: pointer; font-size: 1.1rem;"></i>
            </div>
            
            <img src="${p.image}" alt="${p.name}" class="card-img" onclick="window.location.href='product.html?id=${p.id}'">
            
            <div class="card-brand">${p.brand}</div>
            <div class="card-name" onclick="window.location.href='product.html?id=${p.id}'" style="cursor: pointer;">${p.name}</div>
            
            <div class="card-price">
                ${hasDiscount ? `<span style="text-decoration: line-through; color: #999; font-size: 0.8rem; margin-right: 8px;">LKR ${p.oldPrice.toLocaleString()}</span>` : ''}
                <span>LKR ${p.price.toLocaleString()}</span>
            </div>

            <div class="ml-selection">
                ${sizesHtml}
            </div>

            <button class="add-cart-btn" onclick="addToCart('${p.id}')">Add to Cart</button>
        </div>
    `;
}

function renderBestSellers() {
    const track = document.getElementById('bestSellersTrack');
    if (!track) return;
    
    const displayProducts = allProducts.filter(p => p.bestSeller);
    track.innerHTML = displayProducts.map(p => createProductCard(p)).join('');

    // Re-observe new elements
    if (window.observer) {
        track.querySelectorAll('.scroll-fade').forEach(el => window.observer.observe(el));
    }
}

function renderMainGrid(products = null) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    const displayProducts = products || allProducts;
    grid.innerHTML = displayProducts.map(p => createProductCard(p)).join('');
    
    // Re-observe new elements
    if (window.observer) {
        grid.querySelectorAll('.scroll-fade').forEach(el => window.observer.observe(el));
    }
}

// --- UI ACTIONS ---

function selectSize(btn) {
    const container = btn.parentElement;
    container.querySelectorAll('.ml-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function addToCart(id) {
    const p = allProducts.find(prod => prod.id === id);
    alert(`Added ${p.name} to your DecantLAB bag!`);
}
