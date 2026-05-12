const products = 
[
    {
    id: 1,
    name: 'Wireless Headphones',
    price: 120,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop'
    },
    {
    id: 2,
    name: 'Smart Watch',
    price: 200,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop'
    },
    {
    id: 3,
    name: 'Gaming Laptop',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200&auto=format&fit=crop'
    },
    {
    id: 4,
    name: 'Modern Camera',
    price: 850,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
    }
    ];
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let cart = [];
    function renderProducts() {
productList.innerHTML = '';
products.forEach(product => {
const card = document.createElement('div');
card.classList.add('product-card');
card.innerHTML = `
 <img src="${product.image}" alt="${product.name}">
 <div class="product-info">
 <h3>${product.name}</h3>
 <div class="price">$${product.price}</div>
 <button class="btn" onclick="addToCart(${product.id})">
 Add To Cart
 </button>
 </div>
 `;
productList.appendChild(card);
});
}
function addToCart(id) {
const product = products.find(p => p.id === id);
cart.push(product);
renderCart();
}
function renderCart() {
cartItems.innerHTML = '';
let total = 0;
cart.forEach(item => {
total += item.price;
const div = document.createElement('div');
div.classList.add('cart-item');
div.innerHTML = `
 <h4>${item.name}</h4>
 <p>$${item.price}</p>
 `;
cartItems.appendChild(div);
});
8
totalElement.textContent = total;
}
renderProducts();
