const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM sinonimos', (err, programa) => {
     if (err) {
      res.json(err);
     }
     res.render('sinonimos', {
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
      const query = 'SELECT * FROM sinonimos WHERE sinonimo LIKE ?';
      const searchParam = `%${searchQuery}%`;

      conn.query(query, [searchParam], (err, sinonimos) => {
        if (err) {
          res.json(err);
        } else {
          res.render('sinonimos', {
            data: sinonimos
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
    const query = connection.query('INSERT INTO sinonimos set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/sinonimos')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM sinonimos WHERE id = ?", [id], (err, rows) => {
      res.render('sinonimosEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newSinonimo = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE sinonimos set ? where id = ?', [newSinonimo, id], (err, rows) => {
    res.redirect('/sinonimos');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM sinonimos WHERE id = ?', [id], (err, rows) => {
      res.redirect('/sinonimos');
    });
  });
}

module.exports = controller5;

