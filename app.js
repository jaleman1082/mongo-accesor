const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const Respuesta = require("./db/respuestaModel");
const Prueba = require("./db/pruebaModel");
const Problem = require("./db/problemModel");
const auth = require("./auth");

// execute database connection
dbConnect();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint
app.post("/register", (request, response) => {
  
  // create a new user instance and collect the data
  const user = new User({
    email: request.body.email,
    password: request.body.password,
  });

  // save the new user
  user
    .save()
    // return success if the new user is added to the database successfully
    .then((result) => {
      response.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    // catch erroe if the new user wasn't added successfully to the database
    .catch((error) => {
      response.status(500).send({
        message: "Error creating user",
        error,
      });
    });
   
});

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      
      // check if password matches
      if(request.body.password !== user.password) {
        return response.status(400).send({
          message: "Passwords does not match",
          error,
        });
      }

      //   create JWT token
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );

      //   return success response
      response.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
      });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
/*Prueba
Problem*/

  Prueba.findOne({})
  .then((prueba) => {
    response.json({ obj: prueba });
  })
  .catch((error) => {
    response.status(400).send({
      message: "Passwords does not match",
      error,
    });
  });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.send({ message: "You are authorized to access me" });
});

// register endpoint
app.post("/saveData", (request, response) => {
  console.log(Respuesta);
  switch(request.body.tipo) {
    case 'respuesta': 
      // create a new respuesta instance and collect the data
      const respuesta = new Respuesta({
        tipo : request.body.tipo,
        prepa : request.body.prepa,
        uuid : request.body.uuid,
        idProblema : request.body.idProblema,
        idSolucion : request.body.idSolucion,
        segundos : request.body.segundos,
        datestamp : request.body.datestamp,
        timestamp : request.body.timestamp
      });
      // save Data
      respuesta
        .save()
        // return success if the new respuesta is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "Respuesta Created Successfully",
            result,
          });
        })
        // catch erroe if the new respuesta wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating respuesta",
            error,
          });
        });
    break;
  }
 
});




module.exports = app;
