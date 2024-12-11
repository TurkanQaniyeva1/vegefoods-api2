let menubutton = document.getElementById('menubutton');
let menu = document.querySelector(".menuu")
menubutton.addEventListener('click', () =>{
menu.classList.toggle("miniMenu")
});



let products = document.getElementById("products")

const getProducts = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const products = response.data;


        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="col-md-2 d-flex flex-column align-items-center boxx">
                    <div class="imgg">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <h3>${product.title}</h3>
                    <div class="text">
                        <span class="sale price">$${product.price}</span>
                        <div class="icons">
                            <i class="fa-solid fa-bars"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                            <i class="fa-solid fa-heart"></i>
                        </div>
                    </div>
                </div>
            `;

            productList.innerHTML += productCard;
        });
    } catch (error) {
        console.error('Xeta bas verdi', error);
    }
};


window.onload = getProducts;



