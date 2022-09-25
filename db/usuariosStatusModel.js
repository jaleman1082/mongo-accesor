const mongoose = require("mongoose");

// UsuariosStatus schema
const UsuariosStatusSchema = new mongoose.Schema({
    monedero: {type: Number},
    nivel: {type: Number},
    email: {type: String},
});

// export UsuariosStatusSchema
module.exports = mongoose.model.UsuariosStatus || mongoose.model("UsuariosStatus", UsuariosStatusSchema, 'CollectionUsuariosStatus');