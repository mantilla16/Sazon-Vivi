// platoModel.js
import mongoose from 'mongoose';

const PlatoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String }
});

const Selecciones = new mongoose.Schema({
    tipoSeleccion: { type: String, required: true },
    descripcionSeleccion: { type: String, required: true},
    categoriaSeleccion: { type: String, required: true }
});


const Seleccion = mongoose.model('Seleccion', Selecciones);

const Plato = mongoose.model('Plato', PlatoSchema);

export {Plato, Seleccion}; 
