const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM activos', (err, activos)=>{
            if(err){
                res.json(err);
            }
            res.render('activos',{
                data: activos
            });
        });

    });
};

module.exports = controller;

