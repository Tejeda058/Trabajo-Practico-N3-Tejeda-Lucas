const formulario = document.getElementById("formulario");
const tabla = document.getElementById("tablaPersonas");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = (peso / (altura * altura)).toFixed(2);

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${edad}</td>
        <td>${altura}</td>
        <td>${peso}</td>
        <td>${imc}</td>
        <td>
            <button class="eliminar">Eliminar</button>
        </td>
    `;

    tabla.appendChild(fila);

    fila.querySelector(".eliminar").addEventListener("click", () => {
        fila.remove();
    });

    formulario.reset();
});