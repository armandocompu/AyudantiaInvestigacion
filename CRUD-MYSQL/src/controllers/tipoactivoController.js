const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM tiposactivo', (err, programa) => {
     if (err) {
      res.json(err);
     }
     res.render('tiposactivo', {
        data: programa
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
      const query = 'SELECT * FROM tiposactivo WHERE descripcion LIKE ?';
      const searchParam = `%${searchQuery}%`;

      conn.query(query, [searchParam], (err, tiposactivo) => {
        if (err) {
          res.json(err);
        } else {
          res.render('tiposactivo', {
            data: tiposactivo
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
    const query = connection.query('INSERT INTO tiposactivo set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/tiposactivo')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM tiposactivo WHERE id = ?", [id], (err, rows) => {
      res.render('tiposactivoEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newTiposActivo = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE tiposactivo set ? where id = ?', [newTiposActivo, id], (err, rows) => {
    res.redirect('/tiposactivo');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM tiposactivo WHERE id = ?', [id], (err, rows) => {
      res.redirect('/tiposactivo');
    });
  });
}

module.exports = controller5;

