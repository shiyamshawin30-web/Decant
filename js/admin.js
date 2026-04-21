// --- ADMIN PANEL SCRIPT ---

// Firebase Placeholder (Instructions for User)
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
*/

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();

    const form = document.getElementById('productForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newProduct = {
            id: Date.now().toString(),
            name: document.getElementById('pName').value,
            brand: document.getElementById('pBrand').value,
            price: parseInt(document.getElementById('pPrice').value),
            oldPrice: parseInt(document.getElementById('pOldPrice').value) || null,
            stock: parseInt(document.getElementById('pStock').value),
            sizes: document.getElementById('pSizes').value.split(',').map(s => s.trim()),
            image: document.getElementById('pImage').value,
            description: document.getElementById('pDesc').value,
            type: 'Eau de Parfum' // Default
        };

        saveProduct(newProduct);
        form.reset();
    });
});

function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('decantlab_products')) || [];
    products.push(product);
    localStorage.setItem('decantlab_products', JSON.stringify(products));
    alert('Product added successfully!');
    loadProducts();
}

function loadProducts() {
    const grid = document.getElementById('adminProductGrid');
    const products = JSON.parse(localStorage.getItem('decantlab_products')) || [];
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="color: #999; margin-top: 20px;">No products added yet.</p>';
        return;
    }

    grid.innerHTML = products.map(p => `
        <div class="product-item">
            <div class="product-info">
                <img src="${p.image}" alt="">
                <div>
                    <div style="font-weight: 800; font-size: 0.9rem;">${p.brand}</div>
                    <div style="font-size: 0.8rem;">${p.name} - ${p.price} LKR</div>
                </div>
            </div>
            <button class="btn-delete" onclick="deleteProduct('${p.id}')"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('decantlab_products')) || [];
        products = products.filter(p => p.id !== id);
        localStorage.setItem('decantlab_products', JSON.stringify(products));
        loadProducts();
    }
}
