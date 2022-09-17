const mongoose = require("mongoose");

// Prueba schema
const PruebaSchema = new mongoose.Schema({
  // attr1 field
  attr1: {
    type: String
  },
  //   obj field
  obj: {
    type: Object
  }
});

// export pruebaSchema
module.exports = mongoose.model.Pruebas || mongoose.model("Pruebas", PruebaSchema, 'CollectionNamePrueba');
