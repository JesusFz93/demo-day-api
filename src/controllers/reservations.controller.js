const Reservation = require("../models/reservation");

const crearReservacion = async (req, res) => {
  try {
    const { userId, eventName, eventPlace, eventDate, eventSeats, userSeats } =
      req.body;

    const reservation = {
      userId,
      eventName,
      eventPlace,
      eventDate,
      eventSeats,
      userSeats,
    };
    const nuevaReservacion = await Reservation.create(reservation);

    const reservationCreated = {
      id: nuevaReservacion.id,
      userId: nuevaReservacion.userId,
      eventName: nuevaReservacion.eventName,
      eventPlace: nuevaReservacion.eventPlace,
      eventDate: nuevaReservacion.eventDate,
      eventSeats: nuevaReservacion.eventSeats,
      userSeats: nuevaReservacion.userSeats,
    };

    return res.status(201).json({
      ok: true,
      msg: "Reservacion creada",
      data: reservationCreated,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

const obtenerReservaciones = async (req, res) => {
  try {
    const { usuario } = req;

    const reservations = await Reservation.find({ userId: usuario.id });

    const reservationsData = reservations.map((reservation) => {
      return {
        id: reservation.id,
        userId: reservation.userId,
        eventName: reservation.eventName,
        eventPlace: reservation.eventPlace,
        eventDate: reservation.eventDate,
        eventSeats: reservation.eventSeats,
        userSeats: reservation.userSeats,
      };
    });

    return res.status(200).json({
      ok: true,
      msg: "Lista obtenida",
      data: reservationsData,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};
const cancelarReservacion = async (req, res) => {
  try {
    const { id } = req.params;

    const reservacionRemovida = await Reservation.findByIdAndRemove(id);

    const reservacionCancelada = {
      id: reservacionRemovida.id,
      userId: reservacionRemovida.userId,
      eventName: reservacionRemovida.eventName,
      eventPlace: reservacionRemovida.eventPlace,
      eventDate: reservacionRemovida.eventDate,
      eventSeats: reservacionRemovida.eventSeats,
      userSeats: reservacionRemovida.userSeats,
    };

    return res.status(201).json({
      ok: true,
      msg: "Reservacion cancelada",
      data: reservacionCancelada,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Problemas del lado del servidor",
      data: [],
    });
  }
};

module.exports = {
  crearReservacion,
  obtenerReservaciones,
  cancelarReservacion,
};
