const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    }
  })
};

/* 

-Importando o multer
- Exportando configurações do multer

           const path = require("path"); // Modulo do Node

           module.exports = {
  dest: path.resolve(__dirname, "..", "..", "tmp")
};



-dest: destino
- __dirname -> retorna o diretório onde o arquivo está

- voltando: config '..', src '..', node_modules, 'tmp' 

Resumo: Toda a vez que for feito um upload, ele joga dentro da pasta tmp

                   storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "tmp"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    }
  })
        //// Irá salvar os arquivos em um local especifico. 
             Aqui no próprio disckStorage.
        //// recebe 3 parametros (req, file, cb)
        /// cb ----> callback --> se erro null, se não o caminho path
        /// filename: recebe 3 parametros (req, file, cb)
        /// importado crypto (node.js)
        /// criar uma hash aleatória de 16bits, callback(err,hash)
        // se erro callback erro
        // se não gera a key e converte o hexadecimal em string 
        // e concatena com o titulo original dado pelo usuário
        // evitando assim, sobreescrever o arquivo
        // 


*/
