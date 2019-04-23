const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express(); // Guarda todas as informações da aplicação

app.use(cors());

const server = require("http").Server(app);

const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectRoom", box => {
    socket.join(box);
  });
});

mongoose.connect(
  "mongodb+srv://ricllima:iron33man@cluster0-qrmll.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

server.listen(3333);

// No termianl rodar : node\src\server.js

/*  app.get --- apenas teste/ cria uma rota
 os parametros req e res agem como um interceptador,
 toda a vez que eu for fazer uma requisição.
 Aqui: Toda vez que usuário acessar a rota teste eu vou interceptar essa 
requisição. Sendo assim, eu posso fazer, ou não, algo com ela

app.get("/teste", (req, res) => {
  return res.send("Hello Word");
});
// Porta que será rodada a aplicação// Rodou em http://localhost:3333/teste
*/

// No termianl rodar : node\src\server.js

// ------------------------------INDICE----------------------------------
/*
               const express = require("express");
   // Importa o módulo express: Responsável pelas requisições

                  const app = express(); 
   // Guarda todas as informações da aplicação

                 app.use(express.json())
  // Modulo/ MiddleWare - Permite entender as requisões em json 

          app.use(express.urlencoded({ extended: true }));
  // Modulo/ MiddleWare - Permite usar arquivos (upload)  
                mongoose connect()
   // conecta com o banco de dados
  
Parei 33:55
*/
