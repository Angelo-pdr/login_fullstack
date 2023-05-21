const db = require("../db");
const bcrypt = require("bcrypt");
const saltRound = 10;

module.exports = {
  createUser: async (req, res) => {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    //`insert into users (nomeCompleto, email, password) values (?, ?, ?)`
    db.query(
      `select * from users where email = ?`,
      [email],
      (error, results) => {
        if (error) {
          res.send(error);
          return;
        }
        if (results.length == 0) {
          bcrypt.hash(password, saltRound, (err, hash) => {
            db.query(
              `insert into users (name, email, password) values (?, ?, ?)`,
              [name, email, hash],
              (err, response) => {
                if (err) {
                  res.send(err);
                }
                res.send({ msg: "Usuario cadastrado com sucesso" });
              }
            );
          });
        } else {
          res.send({ msg: "Usuario já cadastrado" });
        }
        res.send(results);
      }
    );
  },

  LoginUser: async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    db.query(
      `select * from users where email = ?`,
      [email, password],
      (error, results) => {
        if (error) {
          res.send(error);
          return;
        }

        if (results.length > 0) {
          bcrypt.compare(password, results[0].password, (erro, result) => {
            if (result) {
              res.send(results);
            } else {
              res.send({ msg: "Senha incorreta" });
            }
          });
        } else {
          res.send({ msg: "Conta nao encontrada" });
        }
      }
    );
  },
};
