const controller2 = {};

controller2.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM conceptos', (err, concepto) => {
     if (err) {
      res.json(err);
     }
     res.render('conceptosView', {
        data: concepto
     });
    });
  });
};

controller2.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO conceptos set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/')
    })
  })
};

controller2.search = (req, res) => {
  const searchQuery = req.query.search; // Obtain the search query from the query string
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    } else {
      const busqueda=`%${searchQuery}%`;
      const query = "SELECT * FROM conceptos WHERE (concepto LIKE '"+busqueda+"') OR (indicador LIKE '"+busqueda+"')";

      //const searchParam = "(concepto LIKE "+`%${searchQuery}%`+") OR (definicion LIKE "+`%${searchQuery}%`+")";

      conn.query(query, (err, conceptos) => {
        if (err) {
          res.json(err);
        } else {
          res.render('conceptosView', {
            data: conceptos
          });
        }
      });
    }
  });
};



controller2.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM conceptos WHERE id = ?", [id], (err, rows) => {
      res.render('conceptos_edit', {
        data: rows[0]
      })
    });
  });
};

controller2.update = (req, res) => {
  const { id } = req.params;
  const newConcepto = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE conceptos set ? where id = ?', [newConcepto, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller2.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM conceptos WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller2;

