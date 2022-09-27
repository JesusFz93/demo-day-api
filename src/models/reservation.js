const { Schema, model } = require("mongoose");

const ReservationSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  eventName: {
    type: String,
  },

  eventPlace: {
    type: String,
  },

  eventDate: {
    type: String,
  },

  eventSeats: {
    type: Number,
  },

  userSeats: {
    type: Number,
  },
});

ReservationSchema.methods.toJSON = function () {
  const { __v, _id, ...lodemas } = this.toObject();
  lodemas.id = _id;
  return lodemas;
};

const Reservation = model("reservation", ReservationSchema);
module.exports = Reservation;
