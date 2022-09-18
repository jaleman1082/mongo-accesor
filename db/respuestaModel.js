const mongoose = require("mongoose");

// Respuesta schema
const RespuestaSchema = new mongoose.Schema({
  tipo: {type: String},
  uuid: {type: String},
  idProblema: {type: Number},
  idSolucion: {type: Number},
  segundos: {type: Number},
  timestamp: {type: String}
});

// export RespuestaSchema
module.exports = mongoose.model.Respuestas || mongoose.model("Respuestas", RespuestaSchema, 'CollectionRespuestas');
