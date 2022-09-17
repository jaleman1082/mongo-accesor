const mongoose = require("mongoose");

// Problema schema
const ProblemaSchema = new mongoose.Schema({
  
  descripcion: {
    type: String,
    required: [true, "No se puede dar de alta un problema sin descripcion!"]
  },
  imagen: {
    type: String
  },
});

// export ProblemaSchema
module.exports = mongoose.model.Problemas || mongoose.model("Problemas", ProblemaSchema, 'CollectionNamePrueba');
