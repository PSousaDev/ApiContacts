const ContactsRepository = require('../repositories/ContactsRepository');

class ContacController {
  async Index(request, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async Show(request, response) {
    // obter um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'user not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const contactExitst = await ContactsRepository.findByEmail(email);
    if (contactExitst) {
      return response.status(400).json({ error: 'this e-mail is already in use' });
    }
    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });
    response.json(contact);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;
    const contactExist = await ContactsRepository.findById(id);

    if (!contactExist) {
      return response.status(400).json({ error: 'user not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is  required' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'this e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });
    response.json(contact);
  }

  async Delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'user not found' });
    }
    await ContactsRepository.delete(id);
    response.sendStatus(204);
    // deletar um registro
  }
}
module.exports = new ContacController();
