// platoModel.js
import mongoose from 'mongoose';

const PlatoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String }
});


const Plato = mongoose.model('Plato', PlatoSchema);

export default Plato; 
