const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const carritoContainer = document.getElementById("carrito-container")
let carrito = []

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"; 
    content.innerHTML =`
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    <img class="images" src="${product.img}">
    `;
             shopContent.append(content); 
    let  comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    
    content.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito);
    })
})
verCarrito.addEventListener("click", () =>{
    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";
    
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `<h1 class="carrito-header-title">carrito.</h1>
    `;
    carritoContainer.append(carritoHeader);

    const carritoButton = document.createElement("h1");
    carritoButton.innerText = "X";
    carritoButton.className = "carrito-header-button";

    carritoButton.addEventListener("click", () =>{
        carritoContainer.style.display = "none"
    })

    carritoHeader.append(carritoButton); 

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "carrito-content"
        carritoContent.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `;
        carritoContainer.append(carritoContent)
    })
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    carritoContainer.append(totalBuying);
    
});