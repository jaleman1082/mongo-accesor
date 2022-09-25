const mongoose = require("mongoose");

// Problema schema
const ProblemaSchema = new mongoose.Schema({
  
});

// export ProblemaSchema
module.exports = mongoose.model.Problemas || mongoose.model("Problemas", ProblemaSchema, 'CollectionNamePrueba');
