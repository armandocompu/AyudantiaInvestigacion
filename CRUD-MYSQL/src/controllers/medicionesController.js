const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM mediciones', (err, mediciones) => {
     if (err) {
      res.json(err);
     }
     res.render('mediciones', {
        data: mediciones
     });
    });
  });
};

controller5.search = (req, res) => {
  const searchQuery = req.query.search; // Obtain the search query from the query string
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    } else {
      const busqueda = `%${searchQuery}%`;
      const query = "SELECT * FROM mediciones WHERE (valor LIKE '"+busqueda+"') OR (valortexto LIKE '"+busqueda+"')";
      

      conn.query(query, (err, mediciones) => {
        if (err) {
          res.json(err);
        } else {
          res.render('mediciones', {
            data: mediciones
          });
        }
      });
    }
  });
};

controller5.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO mediciones set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/mediciones')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM mediciones WHERE id = ?", [id], (err, rows) => {
      res.render('medicionesEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newMedicion = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE mediciones set ? where id = ?', [newMedicion, id], (err, rows) => {
    res.redirect('/mediciones');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM mediciones WHERE id = ?', [id], (err, rows) => {
      res.redirect('/mediciones');
    });
  });
}

module.exports = controller5;

