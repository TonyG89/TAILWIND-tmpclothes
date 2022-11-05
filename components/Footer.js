// footer
function Footer () {
    const divFooter = document.querySelector("footer")

    const blockFooter = (contacts) => `
<a href=${contacts.href} class="m-8" >
<img class="w-10 mx-auto" src="./img/icons/${contacts.img}.svg" alt=${contacts.img}>
<div class="text-l">${contacts.name}</div>
    `

    objContacts.forEach(i => {
        divFooter.innerHTML += blockFooter(i)
    })

}

export default Footer