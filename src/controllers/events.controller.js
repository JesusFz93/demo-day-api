const Event = require("../models/event");

const crearEvento = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    const nameEncontrado = await Event.findOne({ name });

    if (nameEncontrado) {
      return res.status(400).json({
        ok: false,
        msg: `Error, el nombre ${nameEncontrado.name} ya esta registrado`,
      });
    }

    const evento = { name, description, image };
    const nuevoEvento = await Event.create(evento);

    const eventFound = {
      name: nuevoEvento.name,
      description: nuevoEvento.description,
      image: nuevoEvento.image,
    };

    return res.status(201).json({
      ok: true,
      msg: "Evento creado",
      data: eventFound,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

const obtenerEventos = async (req, res) => {
  try {
    const events = await Event.find();

    return res.status(200).json({
      ok: true,
      msg: "Eventos obtenidos",
      data: events,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

const obtenerEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) {
      return res.status(400).json({
        ok: false,
        msg: `Error, el evento ${event.id} no se encontro`,
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Evento obtenido",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

module.exports = { crearEvento, obtenerEventos, obtenerEvento };
