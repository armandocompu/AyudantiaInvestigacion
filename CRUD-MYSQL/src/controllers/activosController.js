const controller3 = {};

controller3.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM activos', (err, activo) => {
     if (err) {
      res.json(err);
     }
     res.render('activos', {
        data: activo
     });
    });
  });
};

controller3.search = (req, res) => {
  const searchQuery = req.query.search; // Obtain the search query from the query string
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    } else {
      const busqueda=`%${searchQuery}%`;
      const query = "SELECT * FROM activos WHERE (descripcion LIKE '"+busqueda+"') OR (url LIKE '"+busqueda+"')";

      conn.query(query, (err, activos) => {
        if (err) {
          res.json(err);
        } else {
          res.render('activos', {
            data: activos
          });
        }
      });
    }
  });
};


controller3.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO activos set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/activos')
    })
  })
};




controller3.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM activos WHERE id = ?", [id], (err, rows) => {
      res.render('activosEdit', {
        data: rows[0]
      })
    });
  });
};

controller3.update = (req, res) => {
  const { id } = req.params;
  const newActivo = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE activos set ? where id = ?', [newActivo, id], (err, rows) => {
    res.redirect('/activos');
  });
  });
};

controller3.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM activos WHERE id = ?', [id], (err, rows) => {
      res.redirect('/activos');
    });
  });
}

module.exports = controller3;

