const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: async function (name) {
          const user = await this.constructor.findOne({ name });
          if (user) {
            return false;
          }
          return true;
        },
        message: (props) =>
          `El nombre de usuario ${props.value} ya está en uso`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: async function (email) {
          const user = await this.constructor.findOne({ email });
          if (user) {
            return false;
          }
          return true;
        },
        message: (props) =>
          `El correo electrónico ${props.value} ya esta registrado`,
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
