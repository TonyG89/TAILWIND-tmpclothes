import objClothes from './clothes.js';
const divClothes = document.querySelector('.clothes')


// clothes

const blockClothes = ""

const clothesBlock = (dress) => `
<div class="max-w-m bg-white hover:bg-amber-100 rounded-lg border-4 border-orange-200 hover:border-orange-400 shadow-md dark:bg-gray-800 dark:border-gray-700">

        <img class="rounded-t-lg mx-auto" src="./img/goods/${dress.link}.png" alt="${dress.link}" />

    <div class="p-5">
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${dress.name.toUpperCase()} (${dress.color})</h2>

        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">Розміри: ${dress.size}</div>
        <div class="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">${dress.price}грн</div>
        <a href="#" class="inline-flex items-center py-2 px-3 text-m font-medium text-center text-white bg-amber-600 rounded-lg hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-200 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-700">
            Замовити
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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

const blocHeader = (contacts) => `
<a href=${contacts.href} class="flex justify-end hover:font-semibold">
<div class="text-2xl px-2 ">${contacts.name}</div> 
<img class="w-10" src="./img/icons/${contacts.img}.svg" alt=${contacts.img}>
`

objContacts.forEach(i => {
    divHeaderContacts.innerHTML += blocHeader(i)
})

// mainBlock
objClothes.forEach(item => {
    divClothes.innerHTML += clothesBlock(item)
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



