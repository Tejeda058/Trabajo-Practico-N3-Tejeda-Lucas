const { useState } = React;

function App() {

    const [personas, setPersonas] = useState([]);

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        altura: "",
        peso: ""
    });

    function manejarCambio(e) {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    function agregarPersona(e) {

        e.preventDefault();

        setPersonas([...personas, formulario]);

        setFormulario({
            nombre: "",
            apellido: "",
            edad: "",
            altura: "",
            peso: ""
        });
    }

    function eliminarPersona(index) {

        const nuevasPersonas = personas.filter((_, i) => i !== index);

        setPersonas(nuevasPersonas);
    }

    return (
        <div>

            <form onSubmit={agregarPersona}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                />

                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formulario.apellido}
                    onChange={manejarCambio}
                />

                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={formulario.edad}
                    onChange={manejarCambio}
                />

                <input
                    type="number"
                    step="0.01"
                    name="altura"
                    placeholder="Altura"
                    value={formulario.altura}
                    onChange={manejarCambio}
                />

                <input
                    type="number"
                    step="0.01"
                    name="peso"
                    placeholder="Peso"
                    value={formulario.peso}
                    onChange={manejarCambio}
                />

                <button type="submit">
                    Agregar
                </button>

            </form>

            <table>

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>IMC</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>

                    {personas.map((persona, index) => {

                        const altura = parseFloat(persona.altura);
                        const peso = parseFloat(persona.peso);

                        const imc = altura > 0
                            ? (peso / (altura * altura)).toFixed(2)
                            : 0;

                        return (
                            <tr key={index}>

                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>{persona.edad}</td>
                                <td>{persona.altura}</td>
                                <td>{persona.peso}</td>
                                <td>{imc}</td>

                                <td>
                                    <button
                                        onClick={() => eliminarPersona(index)}
                                    >
                                        Eliminar
                                    </button>
                                </td>

                            </tr>
                        );
                    })}

                </tbody>

            </table>

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);