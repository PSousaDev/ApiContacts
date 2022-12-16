/* eslint-disable quotes */
const { v4 } = require('uuid');
const db = require('../../database');

let contacts = [
  {
    id: v4(),
    name: 'pedro',
    email: 'rochapedro@hotmail.com',
    phone: '123144141',
    category: v4(),

  },
  {
    id: v4(),
    name: 'roger',
    email: 'roger@hotmail.com',
    phone: '123144141',
    category: v4(),

  },
];
class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  findByEmail(email) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.email === email)));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.Query(`INSERT INTO contacts (name, email, phone, category_id) VALUES($1,$2,$3,$4)
      RETURNING *
      `, [name, email, phone, category_id]);
    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));
      resolve(updateContact);
    });
  }
}
module.exports = new ContactsRepository();
