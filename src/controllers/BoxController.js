const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });

    return res.json(box);
  }
}

module.exports = new BoxController();

/* BoxController.js ---> Controla todos os Boxes(pastas)

class BoxControler ---> permite a criação de novas pastas
Método: Store() {} ---> recebe e envia dados front/back
Receber dados do frontend - 
- o usuário escolhe um titulo
- App Chama o model de Box(pasta)
- App Cria um registro no banco de dados
- retorna pro front todos os dados do Box(pasta) que foi criado
- async await - melhor forma de lidar com requisições assincronas
- const box ---> modo de criar uma box no banco de dados
- title, no momento, estático
- const box = await Box.create({ title: req.body.title });
------------------------------(req.body)


 return res.json(box);
 - retornando uma resposta no formato json

        module.exports = new BoxController();
         - o new é usado para retornar a instancia de uma classe
         - Só assim é possível acessar os métodos da classe
         - aqui async store() e suas propriedades
         - return retorna a classe
    
                  async store(req, res)
        acessar informações através do req.body




*/
