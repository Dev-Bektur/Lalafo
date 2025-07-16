let search = document.getElementById("search");
let about = document.getElementById("about");
let search_btn = document.querySelector(".search-btn");

let products = [
    {
        title: "Mercedes-Benz E-Class",
        img: "https://img5.lalafo.com/i/posters/original_webp/65/69/7d/srocno-srocno-vlozenia-po-kosmetike-i-meloci-id-70907486-844733826.webp",
        desc: "Автомат, Бензин, Седан",
        price: "638 385 KGS"
    },
    {
        title: "Кровать Lafamilia",
        img: "https://img5.lalafo.com/i/posters/original_webp/37/46/71/prodam-tocno-takuu-ze-krovat-lafamilia-s-matrasom-id-54902416-829673914.webp",
        desc: "Новый, Белый, двухэтажный",
        price: "50 000 KGS"
    },
    {
        title: "Детский скейт",
        img: "https://img5.lalafo.com/i/posters/original/2e/5d/24/skejtbord-ot-brenda-dvs-original-id-61292033-808606883.jpeg",
        desc: "Классический, Б/у",
        price: "1 100 KGS"
    },
    {
  title: "Часы G-shock",
  img: "https://img5.lalafo.com/i/posters/original_webp/44/95/8b/g-shock-91204526_image-1675918061.webp",
  desc: "Новый, японский, кварцевый",
  price: "23 500 KGS"
},
    {
        title: "Ноутбук Acer",
        img: "https://img5.lalafo.com/i/posters/original_webp/07/a7/18/ultrabuk-acer-16-gb-ozu-amd-ryzen-5-14-novyj-dla-raboty-uceby-pamat-ssd-id-86193549-811255572.webp",
        desc: "Новый, 16 ГБ ОЗУ",
        price: "55 000 KGS"
    },
    {
        title: "Кондиционер AUX",
        img: "https://img5.lalafo.com/i/posters/original_webp/1e/d1/d0/kondicioner-konder-kondicioneeeeer-id-45944009-843248725.webp",
        desc: "Колонный, Классический",
        price: "21 990 KGS"
    },
    {
        title: "Мебель на заказ",
        img: "https://img5.lalafo.com/i/posters/original_webp/ae/89/77/drugaa-mebel-id-37102455-842795883.webp",
        desc: "Бесплатная доставка",
        price: "Договорная"
    },
    {
        title: "Спортбайк Kawasaki",
        img: "https://img5.lalafo.com/i/posters/original_webp/df/dd/b4/prodaetsa-motocikl-250-kub-id-42921739-843974050.webp",
        desc: "250 куб. см, Бензин, Б/у",
        price: "180 000 KGS"
    },
];

function showProduct(list) {
    about.innerHTML = list.map((item) => {
        return `
        <div class="card">
            <img src="${item.img}" alt="">
            <h2>${item.title}</h2>
            <div class="info">
                <p class="grey">${item.desc}</p>
                <p class="cost">${item.price}</p>
            </div>
        </div>
        `;
    }).join("");
}
showProduct(products);

function filterProduct() {
    let text = search.value.toLowerCase();
    const filtered = products.filter(item =>
        item.title.toLowerCase().includes(text)
    );
    showProduct(filtered);
}

search_btn.onclick = filterProduct;