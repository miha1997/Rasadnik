const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.post('/dohvatiKorisnikaUsername', function(req, res) {
        let username = req.body.username;

        db.query(
            'SELECT * FROM korisnik WHERE username=?', [username],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.post('/unesiKorisnika', function(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        let ime = req.body.ime;
        let tip = req.body.tip;

        db.query(
            'INSERT INTO korisnik (username, password, ime, tip) VALUES (?, ?, ?, ?)', [username, password, ime, tip],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results.insertId);
                }
            }
        );
    });

    router.post('/unesiPoljoprivrednika', function(req, res) {
        let id = req.body.id;
        let ime = req.body.ime;
        let prezime = req.body.prezime;
        let datum = req.body.datum;
        let mesto = req.body.mesto;
        let telefon = req.body.telefon;
        let mail = req.body.mail;

        db.query(
            'INSERT INTO poljoprivrednik (id, ime, prezime, datum, mesto, telefon, mail) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, ime, prezime, datum, mesto, telefon, mail],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(true);
                }
            }
        );
    });

    router.post('/unesiPreduzece', function(req, res) {
        let id = req.body.id;
        let naziv = req.body.naziv;
        let datum = req.body.datum;
        let mesto = req.body.mesto;
        let mail = req.body.mail;

        db.query(
            'INSERT INTO preduzece (id, naziv, datum, mesto, mail) VALUES (?, ?, ?, ?, ?)', [id, naziv, datum, mesto, mail],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(true);
                }
            }
        );
    });

    router.post('/dohvatiKorisnikaUsernamePassword', function(req, res) {
        let username = req.body.username;
        let password = req.body.password;

        db.query(
            'SELECT * FROM korisnik WHERE username=? AND password=?', [username, password],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.post('/dohvatiRasadnikeZaPoljoprivrednika', function(req, res) {
        let idPoljoprivrednika = req.body.idPoljoprivrednika;

        db.query(
            'SELECT * FROM rasadnik WHERE idPoljoprivrednika=?', [idPoljoprivrednika],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    router.post('/dohvatiRasadnikId', function(req, res) {
        let id = req.body.id;

        db.query(
            'SELECT * FROM rasadnik WHERE id=?', [id],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json(results);
                }
            }
        );
    });

    return router;
}

module.exports = createRouter;