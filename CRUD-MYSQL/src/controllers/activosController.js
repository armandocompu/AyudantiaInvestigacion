const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM activos', (err, activos) => {
     if (err) {
      res.json(err);
     }
     res.render('activos', {
        data: activos
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO activos set ?', data, (err, activo) => {
      //console.log(activo)
      res.redirect('/');
    });
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM activos WHERE id = ?", [id], (err, rows) => {
      res.render('activos_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newActivo = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE activos set ? where id = ?', [newActivo, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM activos WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;

