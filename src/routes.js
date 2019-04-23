const express = require("express");

const multer = require("multer");

const multerConfig = require("../src/config/multer");

const routes = express.Router();

const BoxController = require("./controllers/BoxController");
const FileController = require("./controllers/FileController");

routes.post("/boxes", BoxController.store);

routes.get("/boxes/:id/", BoxController.show);

routes.post(
  "/boxes/:id/files",
  multer(multerConfig).single("file"),
  FileController.store
);

module.exports = routes;

/* 

                   const routes = express.Router();
  // Permite o uso de router.js em uma rota. Igual ao App anteriormente

                     module.exports = routes;
  // Está permitindo a exportação de routes. 
  // Este está sendo importado em server.js
  
      const BoxController = require("./controllers/BoxController");
      - Incio da criação de uma recurso. Aqui criar Boxes(pastas)
             
              Metodos dentro da arquitetura restfull
      
      GET -> buscar infos
      POST -> criar infos
      PUT -> Editar info
      DELETE -> Delete info

      

*/
