
const mainElement = document.getElementById('main');



const elements = [
    {
        name:'Waffle with Berries',
        img:'./assets/images/image-waffle.jpg',
        price:'6.50',
        sugarless: true
    },
    {
        name:'Vanilla Bean Crème Brûlée',
        img:'./assets/images/image-creme-brulee.jpg',
        price:'7.00',
        sugarless: true
    },
    {
        name:'Macaron Mix of Five',
        img:'./assets/images/image-macaron.jpg',
        price:'8.00',
        sugarless: false
    },
    {
        name:'Classic Tiramisu',
        img:'./assets/images/image-tiramisu.jpg',
        price:'5.50',
        sugarless: false
    },
    {
        name:'Pistachio Baklava',
        img:'./assets/images/image-baklava.jpg',
        price:'4.00',
        sugarless: true
    },
    {
        name:'Lemon Meringue Pie',
        img:'./assets/images/image-meringue.jpg',
        price:'5.00',
        sugarless: true
    },
    {
        name:'Red Velvet Cake',
        img:'./assets/images/image-cake.jpg',
        price:'4.50',
        sugarless: false
    },
    {
        name:'Salted Caramel Brownie',
        img:'./assets/images/image-brownie.jpg',
        price:'5.50',
        sugarless: false
    },
    {
        name:'Vanilla Panna Cotta',
        img:'./assets/images/image-panna-cotta.jpg', 
        price:'6.50',
        sugarless: true
    }
];


const printElements = ()=>{
    elements.forEach(element=>{
        const fragment = document.createDocumentFragment();
        const mainBox = document.createElement('div');
        mainBox.classList.add('box');
        const img = document.createElement('img');
        img.classList.add('image');
        img.src=element.img;
        const secundaryBox = document.createElement('div');
        secundaryBox.classList.add('info-card');
        const nameProduct = document.createElement('p');
        nameProduct.classList.add('name-product');
        nameProduct.textContent=element.name;
        const sugarless = document.createElement('p');
        sugarless.classList.add('sugarless');
        element.sugarless?sugarless.textContent='sugarless':sugarless.textContent='.';
        const priceProduct = document.createElement('p');
        priceProduct.classList.add('price');
        priceProduct.textContent=element.price;
        secundaryBox.append(nameProduct,sugarless,priceProduct);
        mainBox.append(img,secundaryBox);
        fragment.append(mainBox);
        mainElement.append(fragment);
    });
};


printElements();