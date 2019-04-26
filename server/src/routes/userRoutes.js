const User = require('../models/user');

module.exports = function (app) {


    app.post('/', (req, res) => {
        const userData = {
            id: null,
            rut: req.body.rut,
            email: req.body.email,
            comuna: req.body.comuna,
            sexo: req.body.sexo,
            comentario: req.body.comentario,
            opinion: req.body.opinion,
            fecha:null            
        };

        User.createUser(userData, (err,data) => {
            if(data && data.insertId) {
                res.json({
                    success: true,
                    msg: 'User created',
                    data: data
                });
            }
        });
    });

/* the put, get and delete methods are not used on this 
service, hence they are commented and can be deleted.*/ 
/*
    app.put('/users/:id', (req, res) => {
        const userData = {
            id: req.params.id,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            created:null,
            updated:null
        };

        User.updateUser(userData, (err, data) => {
            if (data && data.msg){
                res.json(data);
            }else{
                res.json({
                    success: false,
                    msg : ' fallo en el update'
                });
            }
        });
    });

app.delete('/users/:id', (req, res) => {
    User.deleteUser(req.params.id, (err, data) => {
        if(data && data.msg === 'eliminado' || data.msg == 'no existe'){
            res.json({
                success: true,
                data
            });
        } else {
            res.status(500).json({
                msg: 'error'
            });
        }
    });
});
app.get('/users' ,(req,res) =>{
    User.getUsers((err, data) =>{
        res.status(200).json(data);
    });
});
*/
}
