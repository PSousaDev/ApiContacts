class ContacController {
  index(req, res) {
    // listar todos os registros
    res.send('contacController send');
  }

  show() {
    // obter um registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}
module.exports = new ContacController();
