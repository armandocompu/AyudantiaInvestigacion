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

