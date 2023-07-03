const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM periodosescolares', (err, periodo) => {
     if (err) {
      res.json(err);
     }
     res.render('periodosescolares', {
        data: periodo
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
      const query = "SELECT * FROM periodosescolares WHERE (periodo LIKE '"+busqueda+"') OR (ciclo LIKE '"+busqueda+"') OR (nombreperiodo LIKE '"+busqueda+"')";
      

      conn.query(query, (err, periodos) => {
        if (err) {
          res.json(err);
        } else {
          res.render('periodosescolares', {
            data: periodos
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
    const query = connection.query('INSERT INTO peridosescolares set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/periodosescolares')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM periodosescolares WHERE id = ?", [id], (err, rows) => {
      res.render('periodosescolaresEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newPeriodo = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE periodosescolares set ? where id = ?', [newPeriodo, id], (err, rows) => {
    res.redirect('/periodosescolares');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM periodosescolares WHERE id = ?', [id], (err, rows) => {
      res.redirect('/periodosescolares');
    });
  });
}

module.exports = controller5;

