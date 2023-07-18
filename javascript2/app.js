const shopContent = document.getElementById("shopContent")
const productos = [
    {
        id:1,
        nombre: "remera",
        precio: 500,
    },
    {
        id:2,
        nombre: "pantalon",
        precio: 1000,
    },
    {
        id:3,
        nombre: "campera",
        precio: 1500,
    },
    {
        id:4,
        nombre: "zapatilla",
        precio: 2000,
    },
    {
        id:5,
        nombre: "sudadera",
        precio: 1400,
    },

]
let carrito = []

productos.forEach((product)=>{
    let content = document.createElement("div"); 
    content.innerHTML =`
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    `;
             shopContent.append(content); 
    let  comprar = document.createElement("button")
    comprar.innerText = "comprar";
    
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