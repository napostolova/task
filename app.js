const products = [
    {
        image: 'https://smartfixghana.com/wp-content/uploads/2019/10/iphone-11-black.jpg',
        name: 'IPhone 10',
        price: 599.90
    },
    {
        image: 'https://s.cdnshm.com/products/l/13812037/xiaomi-redmi-note-8-64gb.jpg',
        name: 'HUAWEI P10 PRO',
        price: 209.00
    },
    {
        image: 'https://cdncloudcart.com/402/products/images/111758/smartfon-xiaomi-11t-5g-2568-grey-mzb09lveu09lueu--256-gb-8-gb-image_61fce7b057dd2_800x800.png?1643964383',
        name: 'XIAOMI 9',
        price: 400.90
    },
    {
        image: 'https://www.yettel.bg/sites/default/files/styles/device-full/public/xiaomi_11t_pro_5g_256gb-white.png?itok=IoH_cCe9',
        name: 'GALAXY STORE 7',
        price: 500.00
    },
    {
        image: 'https://smartfixghana.com/wp-content/uploads/2019/10/iphone-11-black.jpg',
        name: 'IPhone 10',
        price: 599.90
    },
    {
        image: 'https://s.cdnshm.com/products/l/13812037/xiaomi-redmi-note-8-64gb.jpg',
        name: 'HUAWEI P10 PRO',
        price: 209.00
    },
    {
        image: 'https://cdncloudcart.com/402/products/images/111758/smartfon-xiaomi-11t-5g-2568-grey-mzb09lveu09lueu--256-gb-8-gb-image_61fce7b057dd2_800x800.png?1643964383',
        name: 'XIAOMI 9',
        price: 400.90
    },
    {
        image: 'https://www.yettel.bg/sites/default/files/styles/device-full/public/xiaomi_11t_pro_5g_256gb-white.png?itok=IoH_cCe9',
        name: 'GALAXY STORE 7',
        price: 500.00
    },


]
function deleteProduct(e) {
    e.preventDefault();
    let card = e.target.parentNode.parentNode.parentNode.parentNode;
    card.style.display = 'none';
}

function renderProducts() {
    let container = document.getElementById('container');
    products.forEach(product => {
        let card = document.createElement('div');
        card.className = 'col-3 border';

        let cardImage = document.createElement('div');
        cardImage.className = 'img-container';

        let image = document.createElement('img');
        image.className = 'product-img';
        image.setAttribute('src', product.image);

        cardImage.appendChild(image);

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let name = document.createElement('p');
        name.className = 'product-name';
        name.innerHTML = product.name;

        let price = document.createElement('p');
        price.className = 'product-price';
        price.innerHTML = `$${product.price}`;

        cardBody.appendChild(name);
        cardBody.appendChild(price);

        card.appendChild(cardImage);
        card.appendChild(cardBody);

        let containerButtons = document.createElement('div');
        containerButtons.className = 'buttons';
        let deleteBtn = document.createElement('button');
        let deleteIcon = document.createElement('span');
        deleteIcon.className = "material-symbols-outlined";
        deleteIcon.innerHTML = 'delete';
        deleteBtn.addEventListener('click', deleteProduct)
        deleteBtn.appendChild(deleteIcon)

        let cartBtn = document.createElement('button');
        let cartIcon = document.createElement('span');
        cartIcon.className = 'material-symbols-outlined'
        cartIcon.innerHTML = 'shopping_cart';
        cartBtn.appendChild(cartIcon);

        containerButtons.appendChild(deleteBtn);
        containerButtons.appendChild(cartBtn);
        cardBody.appendChild(containerButtons);

        container.appendChild(card);
    })
}
