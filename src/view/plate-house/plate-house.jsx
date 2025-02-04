import { useState } from 'react';

function App() {
    const [plato, setPlato] = useState(null); // Estado para almacenar el plato guardado
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async () => {
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
            <button onClick={handleSubmit}>Guardar Plato</button>

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
        </div>
    );
}

export default App;
