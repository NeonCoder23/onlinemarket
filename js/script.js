const product = [
    {
        id: 0,
        image: "https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68fc390a85.png",
        title: 'Kolbasa ANDALUS Doktorskaya',
        price: 42599,
    },
    {
        id: 1,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68f2dd3b61.png',
        title: 'Yog \'bilan katik "365 kun". 3,2%',
        price: 12799,
    },
    {
        id: 2,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68f52f29dc.png',
        title: 'A\'SU Limon suvi',
        price: 4799,
    },
    {
        id: 3,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b7a3a59a849.png',
        title: 'Tarvuz',
        price: 13699,
    },
    {
        id: 4,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b7a3a59b68d.png',
        title: 'Uzum Kishmish',
        price: 17399,
    },
    {
        id: 5,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b7a3a91661b.png',
        title: 'Bolgar qalampiri',
        price: 4499,
    },
    {
        id: 6,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b7a3a599a7e.png',
        title: 'Qovun chillaki',
        price: 21499,
    },
    {
        id: 7,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68f65b4dd8.png',
        title: 'Bliss Sharbati o\'rik',
        price: 11599,
    },
    {
        id: 8,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68f65b428b.png',
        title: 'Bliss Sharbati olma',
        price: 11599,
    },
    {
        id: 9,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68f65ae6b3.png',
        title: 'Bliss Sharbati anor',
        price: 11599,
    },
    {
        id: 10,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68fc38ee1d.png',
        title: 'Kolbasa Asl Baraka/ EXTRA',
        price: 48599,
    },
    {
        id: 11,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b68fc38fc27.png',
        title: 'Salyami Sherin',
        price: 49999,
    },
    {
        id: 12,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b69000e2eeb.png',
        title: 'Bigbon Mol go\'shti / 75g',
        price: 3599,
    },
    {
        id: 13,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b69000e1eba.png',
        title: 'Big Bon Tovuq + sous/ 75g',
        price: 3599,
    },
    {
        id: 14,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b69000ed049.png',
        title: 'Bigbon Tovuq + sous / 95g',
        price: 4999,
    },
    {
        id: 15,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b69000ebff9.png',
        title: 'Big Bon Big sous 85g',
        price: 8599,
    },
    {
        id: 16,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b6901f4dd16.png',
        title: 'Metro konfet 1kg',
        price: 79999,
    },
    {
        id: 17,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b6901f4ee99.png',
        title: 'Albenia',
        price: 3999,
    },
    {
        id: 18,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b6901f5957e.png',
        title: 'Ananas konserva 567g',
        price: 31999,
    },
    {
        id: 19,
        image: 'https://catalog.korzinka.uz/storage/catalog-products/2023/7/small_64b6901f5a491.png',
        title: 'Milka shokolad pastasi 350g',
        price: 47999,
    },
]

const categories = [...new Set(product.map((item)=>
    {return item;}))]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return `
    <div class="box">
        <div class="img-box">
            <img class="images" src="${image}">
        </div>
        <div class="bottom">
        <p>${title}</p>
        <h2>${price} so'm </h2>
    `+
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `
        </div>
    </div>
        `
}).join('')



var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart()
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart()
}
function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = +0+ "so'm"
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price;
            document.getElementById('total').innerHTML = total + "so'm " + `<br> <p>CashBack ${total / 100 * 2} so'm</p> `;
            return (
                `
                <div class="cart-item">
                <div class="row-img">
                <img class="rowimg" src=${image}>
                </div>
                <p style='font-size=12px';>${title}</p>
                <h2 style='font-size=15px';>${price} so'm</h2>
            
            `+
                "<i class='fa fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');

    }

}