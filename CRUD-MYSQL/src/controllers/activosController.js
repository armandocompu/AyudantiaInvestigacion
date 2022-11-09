const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM activos', (err, activo)=>{
            if(err){
                res.json(err);
            }
            res.render('activosView',{
                data: activo
            });
        });

    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO activos set ?', [data],(err,active)=>{
            console.log(active);
            res.sen('works')
        })
    })
};

module.exports = controller;

