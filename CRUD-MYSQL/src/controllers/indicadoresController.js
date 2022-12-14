const controller5 = {};

controller5.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM indicadores', (err, indicador) => {
     if (err) {
      res.json(err);
     }
     res.render('indicadores', {
        data: indicador
     });
    });
  });
};

controller5.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO indicadores set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/indicadores')
    })
  })
};

controller5.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM indicadores WHERE id = ?", [id], (err, rows) => {
      res.render('indicadoresEdit', {
        data: rows[0]
      })
    });
  });
};

controller5.update = (req, res) => {
  const { id } = req.params;
  const newIndicador = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE indicadores set ? where id = ?', [newIndicador, id], (err, rows) => {
    res.redirect('/indicadores');
  });
  });
};

controller5.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM indicadores WHERE id = ?', [id], (err, rows) => {
      res.redirect('/indicadores');
    });
  });
}

module.exports = controller5;

