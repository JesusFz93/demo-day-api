const { Schema, model } = require("mongoose");
const skipEmpty = require("mongoose-skip-empty");

const UserSchema = Schema({
  email: {
    type: String,
    require: [true, "El email es requerido"],
    set: skipEmpty,
  },

  username: {
    type: String,
    require: [true, "El nombre es requerido"],
    unique: true,
    set: skipEmpty,
  },
  firstName: {
    type: String,
    set: skipEmpty,
  },

  lastName: {
    type: String,
    set: skipEmpty,
  },

  password: {
    type: String,
  },

  image: {
    type: String,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, _id, ...lodemas } = this.toObject();
  lodemas.id = _id;
  return lodemas;
};

const User = model("user", UserSchema);
module.exports = User;
