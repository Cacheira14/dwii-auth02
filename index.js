const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const usersRoutes = require("./routes/users-route");
const protectedRoutes = require("./routes/protected-route");
const userauth = require("./middlewares/auth");
const swaggerSpec = require("./controllers/swagger-controller");
const config = require("./configs/env");
const models = require("./models");
//const env = require('dotenv').config();
//console.log(process.env); //remover
console.log(config);

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/protected", protectedRoutes);

//endpoint protegido
app.get("/protected", userauth, function (req, res) {
  res.send("This resource access requires authentication!");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
models.sequelize.sync();
const listener = app.listen(/*process.env.PORT*/ config.port, () => {
  console.log(
    "listening on port " +
      listener.address().port +
      " on machine: " +
      config.host +
      " with an env of: " +
      config.envi
  );
});

/*
//atribuir novo endpoint
app.get("/users", function (req, res) {
    res.send("This resource access is open!");
});

app.listen(port, function(){
    console.log(`App is running on localhost: ${port}`);
});

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
    title: "BasicAuthentication_01",
    version: "1.0.0",
    description: "Example 01 for Basic Authentication",
    contact: { name: "Andre Cacheira" },
    },
    servers: [ {url: "http://localhost:" + port,},],
    components: {
    securitySchemes: {
    basicAuth: { type: "http", scheme: "basic", },
    },
    },
    security: [{ basicAuth: [] }],
   };

const swaggerOptions = {
    swaggerDefinition,
    apis: ["./docs/ast ast/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
*/
