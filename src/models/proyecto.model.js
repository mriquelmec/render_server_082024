import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ProyectoSchema = new Schema({
    name: {
        type: String,
        required: [true, "Necesita un nombre"],
        minLength: [2, "El pirata debe contener al menos 2 caracteres"],
        unique: true 
    },
    imgURL: {
        type: String,
        required: [true, "Necesita una imagen!"]
    },
    crewPosition: { 
        type: String,
        minLength: [2, ""]
    },
    numberOfTreasureChests: {
        type: Number,
        required: [true, "Usted necesita proporcionar un número de cofres del tesoro"]
    }, 
    pirateCatchPhrase: {
        type: String,
        required: [true, "Debes proporcionar una Frase de Captura Pirata!"]
    },
    pegLeg: {
        type: Boolean,
        default: true
    },
    eyePatch: {
        type: Boolean,
        default: true
    },
    hookHand: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

ProyectoSchema.plugin(uniqueValidator);
const Proyecto = model("Proyecto", ProyectoSchema);

export default Proyecto;