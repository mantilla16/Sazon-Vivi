import { useState } from 'react';

function App() {
    const [plato, setPlato] = useState(null); // Estado para almacenar el plato guardado
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    const [seleccion, setSeleccion] = useState(null); // Estado para almacenar la seleccion guardada
    const [tipoSeleccion, setTipoSeleccion] = useState('');
    const [categoriaSeleccion, setCategoriaSeleccion] = useState('');
    const [descripcionSeleccion, setDescripcionSeleccion] = useState('');

    const nuevaSeleccion = async () => {        
        const response = await fetch('http://localhost:5000/crear-seleccion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },


            body: JSON.stringify({
                tipoSeleccion,
                descripcionSeleccion,
                categoriaSeleccion,
            }),            
        });

        const data = await response.json();
        
        // Guardar el plato en el estado para mostrarlo en pantalla
        if (response.ok) {
            setSeleccion(data.seleccion); // Actualizar el estado con el plato insertado
            console.log(data);
            
        } else {
            console.error('Error al guardar el plato:', data);
        }
    };

    const nuevoPlato = async () => {
        const response = await fetch('http://localhost:5000/crear-plato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre,
                descripcion,
                precio,
                categoria,
            }),
        });

        const data = await response.json();
        
        // Guardar el plato en el estado para mostrarlo en pantalla
        if (response.ok) {
            setPlato(data.plato); // Actualizar el estado con el plato insertado
        } else {
            console.error('Error al guardar el plato:', data);
        }
    };

    return (
        <div>
            <h1>Agregar Plato</h1>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del plato"
            />
            <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción"
            />
            <input
                type="number"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                placeholder="Precio"
            />
            <input
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder="Categoría"
            />
            <button onClick={nuevoPlato}>Guardar Plato</button>

            {/* Mostrar el plato guardado */}
            {plato && (
                <div>
                    <h2>Plato Guardado</h2>
                    <p><strong>Nombre:</strong> {plato.nombre}</p>
                    <p><strong>Descripción:</strong> {plato.descripcion}</p>
                    <p><strong>Precio:</strong> {plato.precio}</p>
                    <p><strong>Categoría:</strong> {plato.categoria}</p>
                </div>
            )}

            <h1>Agregar Seleccion</h1>
            <input
                type="text"
                value={tipoSeleccion}
                onChange={(e) => setTipoSeleccion(e.target.value)}
                placeholder="Nombre de la seleccion"
            />
            <input
                type="text"
                value={descripcionSeleccion}
                onChange={(e) => setDescripcionSeleccion(e.target.value)}
                placeholder="Descripción"
            />
            <input
                type="text"
                value={categoriaSeleccion}
                onChange={(e) => setCategoriaSeleccion(e.target.value)}
                placeholder="Categoría"
            />
            <button onClick={nuevaSeleccion}>Guardar Seleccion</button>

            {/* Mostrar el plato guardado */}
            {seleccion && (
                <div>
                    <h2>Seleccion guardada</h2>
                    <p><strong>Tipo de seleccion:</strong> {seleccion.tipoSeleccion}</p>
                    <p><strong>Descripción:</strong> {seleccion.descripcionSeleccion}</p>
                    <p><strong>Categoría:</strong> {seleccion.categoriaSeleccion}</p>
                </div>
            )}
        </div>

        
    );
}

export default App;
