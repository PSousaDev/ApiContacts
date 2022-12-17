const db = require('../../database');

class CategotyRepository {
  async findAll() {
    const rows = await db.Query(`
    SELECT * FROM categories ORDER BY name`);
    return rows;
  }

  async create({ name }) {
    const [row] = await db.Query(`
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING  *
  `, [name]);
    return row;
  }
}
module.exports = new CategotyRepository();
