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

module.exports = controller;

