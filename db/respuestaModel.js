const mongoose = require("mongoose");

// Respuesta schema
const RespuestaSchema = new mongoose.Schema({
  tipo: {type: text},
  uuid: {type: text},
  idProblema: {type: int},
  idSolucion: {type: int},
  segundos: {type: int},
  timestamp: {type: text}
});

// export RespuestaSchema
module.exports = mongoose.model.Respuestas || mongoose.model("Respuestas", RespuestaSchema, 'CollectionNamePrueba');
