// Initialize express router
import mongoose from 'mongoose';


const Selecciones = new mongoose.Schema({
    tipoSeleccion: { type: String, required: true },
    descripcionSeleccion: { type: String, required: true},
    categoriaSeleccion: { type: String, required: true }
});


const Seleccion = mongoose.model('Seleccion', Selecciones);

export default Seleccion;
