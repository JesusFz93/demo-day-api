const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  name: {
    type: String,
    unique: true,
  },
  place: {
    type: String,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
  },

  image: {
    type: String,
  },

  price: {
    type: Number,
  },

  seats: {
    type: Number,
  },

  available: {
    type: Boolean,
  },

  fecha: {
    type: String,
  },
});

EventSchema.methods.toJSON = function () {
  const { __v, _id, ...lodemas } = this.toObject();
  lodemas.id = _id;
  return lodemas;
};

const Event = model("event", EventSchema);
module.exports = Event;
