const mongoose = require("mongoose");

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

File.virtual("url").get(function() {
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);

/*
  File.js ----> Modulo de arquivos
  path ----> O nome do aruivo fisico na na minha aplicação
                        Path
            Quando o usuário(frontend) fizer um upoload de arquivos para
            o backend, vou guardar este arquivo dentro da minha estrutura
            Path mostra o caminho onde está este arquivo
          

*/
