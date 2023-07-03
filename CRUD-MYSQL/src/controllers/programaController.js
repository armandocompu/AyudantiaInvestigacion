const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM programas', (err, programa) => {
     if (err) {
      res.json(err);
     }
     res.render('programas', {
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
      const busqueda = `%${searchQuery}%`;
      const query = "SELECT * FROM definiciones WHERE (programa LIKE '"+busqueda+"')";
      

      conn.query(query, (err, programas) => {
        if (err) {
          res.json(err);
        } else {
          res.render('programas', {
            data: programas
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
    const query = connection.query('INSERT INTO programas set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/programas')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM programas WHERE id = ?", [id], (err, rows) => {
      res.render('programasEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newPrograma = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE programas set ? where id = ?', [newPrograma, id], (err, rows) => {
    res.redirect('/programas');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM programas WHERE id = ?', [id], (err, rows) => {
      res.redirect('/programas');
    });
  });
}

module.exports = controller5;

