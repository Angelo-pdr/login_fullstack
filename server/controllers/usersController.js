const db = require("../db");

module.exports = {
  createUser: async (req, res) => {
    db.query(
      `insert into users (nomeCompleto, email, password) values 
      ('Gabriel da Silva Pedrosa', 'gabriel.ppedrosa@gmail.com', 'gabriel1234')`
    );
  },
};
