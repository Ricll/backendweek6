const mongoose = require("mongoose");

const Box = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Box", Box);

/*
Schema = Semelhante a tabela do banco relacional
em bancos não relacionais não existe o conceito de tabela.  

files: lista de arquivos tipo vetor
vetor significa varios valores diferentes. Ex: um variavel com um Array, 
com intenger ou objects  

           files: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }]

    É um array de model File.
    Um Schema que vai armazenar todos os arquivos e estes arquivos 
    vão ser relacionados dentro de pastas(Boxes).
    Aqui serão armazenados os Ids dos Arquivos
    É passado como referência(ref) o arquivo File.js
    Está é a forma de se fazer relacionamentos no mongoDb

                    timestamps: true
      faz com crie um a created at = data de criação   
      update at = data de edição 

                    module.exports = mongoose.model("Box", Box);
        Parametro 1: Nome do Modulo, 2 nome do Schema: const Box
              
*/
