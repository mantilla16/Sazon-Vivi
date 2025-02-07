import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Importa el middleware CORS
import dotenv from 'dotenv';
import {Plato, Seleccion} from './models/models.js';

dotenv.config();

const app = express();

app.use(express.json()); // Middleware para leer el cuerpo de las solicitudes JSON

// Configura CORS para permitir solicitudes desde tu frontend
const corsOptions = {
    origin: 'http://localhost:5173', // Permite solicitudes desde tu frontend en React
    methods: ['GET', 'POST', 'PUT'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true,  // Permite el envío de cookies
};

app.use(cors(corsOptions)); // Aplica la configuración de CORS
// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: 30000,  // Aumenta el tiempo de espera para la conexión
})
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err));


    
app.post('/crear-seleccion', async (req, res) => {
    try {

        console.log('Datos recibidos:', req.body); //🛠 Verificar qué datos llegan
        
        // Obtener los datos del cuerpo de la solicitud
        const { tipoSeleccion, descripcionSeleccion, categoriaSeleccion } = req.body;

        if (!tipoSeleccion || !descripcionSeleccion || !categoriaSeleccion) {
            return res.status(400).json({ error: 'Faltan datos' });
        }

        // Crear un nuevo plato con los datos proporcionados
        const nuevaSeleccion = new Seleccion({
            tipoSeleccion,
            descripcionSeleccion,
            categoriaSeleccion
        });

        // Guardar el plato en la base de datos
        await nuevaSeleccion.save();

        // Responder con un mensaje de éxito
        res.status(201).json({ message: 'Seleccion creada con éxito', seleccion: nuevaSeleccion });
    } catch (err) {
        res.status(500).send('Error al insertar seleccion: ' + err.message);
    }
});

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
        // Realizar una consulta específica, ejemplo: encontrar platos por categorí
        const platos = await Plato.find({});
        res.json(platos);
        
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/actualizar-plato:id', async(req, res) =>{

    try{
        const {id} = req.params
        const nuevosDatos = req.body

        const platoActualizado = await Plato.findByIdAndUpdate(id, nuevosDatos,{new:true})

        if(!platoActualizado){
            return res.status(404).json({message:'Plato no encontrado'})
        }
    }catch (error){
       res.status(500).send(error.message)
        
    }
})

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
