import objClothes from './clothes.js';
const divClothes = document.querySelector('.clothes')

// clothes

const blockClothes = ""

const clothesBlock = (order) => `
<div class="max-w-m bg-white hover:bg-amber-100 rounded-lg border-4 border-orange-200 hover:border-orange-400 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg mx-auto" src="./img/goods/${order.link}.png" alt="${order.link}" />

    <div class="p-5" id="${order.id}">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${order.name.toUpperCase()} (${order.color})</h2>

        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">Розміри: ${order.desc}</div>
        <div class="mb-3 font-normal dark:text-gray-400">Розміри: ${order.size}</div>
        <div class="mb-3 text-2xl font-normal dark:text-gray-400">${order.price}грн</div>
        <a href="#" class="btn-order inline-flex items-center py-3 px-5 text-xl font-medium text-center text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-200 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-700">
            Замовити
        </a>
    </div>
</div>`;

// contacts
const objContacts = [{
    name: "toomuch.print",
    img: "instagram",
    href: "https://www.instagram.com/toomuch.print/"
},
{
    name: "+38 (063) 229-03-66",
    img: "phone",
    href: "tel:+380632290366"
},
{
    name: "@toomuchprint",
    img: "telegram-mono",
    href: "https://t.me/toomuchprint"
},
{
    name: "toomuchprint",
    img: "email",
    href: "mailto:name@email.com"
}]


// header
const divHeaderContacts = document.querySelector('header .contacts')

const blockHeader = (contacts) => (`
<a href=${contacts.href} class="flex justify-end hover:font-semibold">
<div class="text-2xl px-2 ">${contacts.name}</div> 
<img class="w-10" src="./img/icons/${contacts.img}.svg" alt=${contacts.img}>
`)

objContacts.forEach(i => {
    divHeaderContacts.innerHTML += blockHeader(i)
})

// mainBlock
objClothes.forEach(item => {
    divClothes.innerHTML += clothesBlock(item)
})

// orders
const orderList = []
const divOrders = document.querySelector('.orders')

const orderBlock = order => (`


<div class="bg-amber-100 rounded-lg
hover:border-2 border-orange-400
shadow-md dark:bg-gray-800 dark:border-gray-700">
<img class="rounded-t-lg mx-auto"
    src="./img/goods/${order.link}.png"
    alt="${order.link}" />
<div class="p-5" id="${order.id}">
    <h2 class="font-bold text-gray-900
        dark:text-white">${order.name}</h2>
    <h3>${order.color}, ${order.size}</h3>
    <div class="my-3 font-normal
        dark:text-gray-400 flex justify-center
        items-center">
        <button class="ease-in duration-150 w-6 minus hover:w-7"><img
                src="./img/icons/minus.png"
                alt="minus"></button>
        <input type="number" class="amount mx-1
            w-[50px]
            p-2 border-4" value="${order.amount}">
        <button class="ease-in duration-150 w-6 plus hover:w-7"><img
                src="./img/icons/plus.png"
                alt="plus"></button>
    </div>
    <div class="mb-3 text-2xl font-normal
        dark:text-gray-400">100 грн</div>
    <a href="#" class="btn-order inline-flex
        items-center py-2 px-3 font-medium
        text-center text-white bg-amber-600
        rounded-lg hover:bg-amber-700 focus:ring-4
        focus:outline-none focus:ring-amber-200
        dark:bg-amber-500 dark:hover:bg-amber-600
        dark:focus:ring-amber-700">
        Прибрати
    </a>
</div>
</div>

`)

function renderOrders() {
    let ordersBlock = ''
    orderList.forEach(i => {
        ordersBlock = orderBlock(i)
    })
    divOrders.innerHTML += ordersBlock
}


// add order
const btnOrder = document.querySelectorAll('.btn-order')

btnOrder.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const divId = e.target.parentNode.id
        const orderInfo = objClothes.filter(obj => obj.id == divId)
        const sameOrder = orderList.some(el => {
            console.log(el.id);
            console.log(orderInfo[0].id);
            if (el.id == orderInfo[0].id) {
                return true
            } else { return false }
        })
        console.log(document.body.scrollHeight);
        console.log(sameOrder);
        
        window.scrollTo(0,document.body.scrollHeight)

        // sameOrder ? orderInfo[0].amount+=1 : orderInfo[0].amount=1

        orderList.push(...orderInfo)
        console.log(orderInfo);
        // e.target.classList.add("invisible")

        console.log(orderList);
        orderBlock(orderList)
        renderOrders()
    })
})


// footer
const divFooter = document.querySelector("footer")

const blockFooter = (contacts) => `
<a href=${contacts.href} class="m-8" >
<img class="w-10 mx-auto" src="./img/icons/${contacts.img}.svg" alt=${contacts.img}>
<div class="text-l">${contacts.name}</div>
    `

objContacts.forEach(i => {
    divFooter.innerHTML += blockFooter(i)
})



