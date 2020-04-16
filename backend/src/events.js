const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/dohvatiKorisnikaUsername', function (req, res) {
    let username = req.body.username;

    db.query(
      'SELECT * FROM korisnik WHERE username=?',
      [username],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/getUserWithUsernamePassword', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    db.query(
      'SELECT * FROM user WHERE username=? AND password=?',
      [username, password],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.get('/dohvatiKorisnika', function (req, res) {
    db.query(
      'SELECT * FROM korisnik WHERE username=?',
      [username],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;