import Proyecto from '../models/proyecto.model.js';   //BASE 

const getProyectos = async (req, res) => {
    try {
        const proyecto = await Proyecto.find().sort({ fecha_vencimiento: 1 });
        res.json(proyecto);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getProyecto = async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params._id);
        if (!proyecto) {
            res.status(404).json({ message: "Pirata no encontrado" });
            return;
        }
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const crearProyecto =  async (req, res) => {

    console.log(req.body); 
    try {
        const nuevoProyecto = await Proyecto.create(req.body);
        res.json(nuevoProyecto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const actualizarProyecto = async (req, res) => {
    try {
        const dataBody = {
            estado: req.body.estado
        }
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, dataBody, { new: true, runValidators: true });
        if (!proyectoActualizado) {
            res.status(404).json({ message: "Pirata no encontrado" });
            return;
        }
        res.json(proyectoActualizado);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const eliminarProyecto = async (req, res) => {
    try {
        const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params._id);
        if (!proyectoEliminado) {
            res.status(404).json({ message: "Pirata no encontrado" });
            return;
        }
        res.json({ message: "Pirata eliminado correctamente", proyecto_eliminado: proyectoEliminado });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto,
    getProyecto
}
