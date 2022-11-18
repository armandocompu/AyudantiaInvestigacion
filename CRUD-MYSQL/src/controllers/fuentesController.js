const controller3 = {};

controller3.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM fuentes', (err, fuente) => {
     if (err) {
      res.json(err);
     }
     res.render('fuentes', {
        data: fuente
     });
    });
  });
};

controller3.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO fuentes set ?', data, (err, concept) => {
      console.log(concept)
      //res.send('works')
      res.redirect('/fuentes')
    })
  })
};

controller3.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM fuentes WHERE id = ?", [id], (err, rows) => {
      res.render('fuentesEdit', {
        data: rows[0]
      })
    });
  });
};

controller3.update = (req, res) => {
  const { id } = req.params;
  const newFuente = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE fuentes set ? where id = ?', [newFuente, id], (err, rows) => {
    res.redirect('/fuentes');
  });
  });
};

controller3.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM fuentes WHERE id = ?', [id], (err, rows) => {
      res.redirect('/fuentes');
    });
  });
}

module.exports = controller3;

