import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importa el middleware CORS
import dotenv from 'dotenv';
import Plato from './models/platoModel.js';

dotenv.config();

const app = express();
app.use(express.json()); // Middleware para leer el cuerpo de las solicitudes JSON

// Configura CORS para permitir solicitudes desde tu frontend
const corsOptions = {
    origin: 'http://localhost:5173', // Permite solicitudes desde tu frontend en React
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true,  // Permite el envío de cookies
};

app.use(cors(corsOptions)); // Aplica la configuración de CORS
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err));



app.post('/crear-plato', async (req, res) => {
    try {
        // Obtener los datos del cuerpo de la solicitud
        const { nombre, descripcion, precio, categoria } = req.body;

        // Crear un nuevo plato con los datos proporcionados
        const nuevoPlato = new Plato({
            nombre,
            descripcion,
            precio,
            categoria
        });

        // Guardar el plato en la base de datos
        await nuevoPlato.save();

        // Responder con un mensaje de éxito
        res.status(201).json({ message: 'Plato creado con éxito', plato: nuevoPlato });
    } catch (err) {
        res.status(500).send('Error al insertar plato: ' + err.message);
    }
});

app.get('/ver-platos', async (req, res) => {
    try {
        // Realizar una consulta específica, ejemplo: encontrar platos por categoría
        const platos = await Plato.find({ categoria: 'Principal' });
        res.json(platos);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
