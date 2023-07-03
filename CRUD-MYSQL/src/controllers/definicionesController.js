const controller4 = {};

controller4.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM definiciones', (err, definicion) => {
     if (err) {
      res.json(err);
     }
     res.render('definiciones', {
        data: definicion
     });
    });
  });
};


controller4.search = (req, res) => {
  const searchQuery = req.query.search; // Obtain the search query from the query string
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    } else {
      const busqueda = `%${searchQuery}%`;
      const query = "SELECT * FROM definiciones WHERE (definicion LIKE '"+busqueda+"') OR (fecha LIKE '"+busqueda+"')";
      

      conn.query(query, (err, definiciones) => {
        if (err) {
          res.json(err);
        } else {
          res.render('definiciones', {
            data: definiciones
          });
        }
      });
    }
  });
};


controller4.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO definiciones set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/definiciones')
    })
  })
};

controller4.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM definiciones WHERE id = ?", [id], (err, rows) => {
      res.render('definicionesEdit', {
        data: rows[0]
      })
    });
  });
};

controller4.update = (req, res) => {
  const { id } = req.params;
  const newDefinicion = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE definiciones set ? where id = ?', [newDefinicion, id], (err, rows) => {
    res.redirect('/definiciones');
  });
  });
};

controller4.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM definiciones WHERE id = ?', [id], (err, rows) => {
      res.redirect('/definiciones');
    });
  });
}

module.exports = controller4;

