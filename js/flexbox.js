const productos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Auriculares",
    "Webcam",
    "Parlantes"
];

const contenedor = document.getElementById("contenedor");
const boton = document.getElementById("ordenarBtn");

function mostrarProductos(lista) {

    contenedor.innerHTML = "";

    lista.forEach(producto => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta");

        tarjeta.innerHTML = `
            <h3>${producto}</h3>
            <p>Producto tecnológico</p>
        `;

        contenedor.appendChild(tarjeta);
    });
}

mostrarProductos(productos);

boton.addEventListener("click", () => {

    productos.sort();

    mostrarProductos(productos);
});