const mysql = require('mysql');

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'jurgensen',
    password : '374374',
    database :  'metroapp-db'
});

let userModel = {};

userModel.getUsers = (callback) => {
    if(connection){
        connection.query('SELECT * FROM users ORDER BY id',
            (err, rows) => {
              if(err){
                  throw err;
              } else {
                  callback(null, rows);
              } 
            }
        );
    }
}

userModel.createUser = (userData, callback) => {
    console.log(userData);
    if(connection){
        connection.query('INSERT INTO colaboradores SET ?', userData,
        (err, result) => {
            if(err){
                throw err;
            } else {
                callback(null, {
                    'insertId': result.insertId
                })
            }
        }
        )
    }
}

userModel.updateUser = (userData, callback) => {
    if(connection){
        const sql= `UPDATE users SET
        username = ${connection.escape(userData.username)},
        email = ${connection.escape(userData.email)},
        password = ${connection.escape(userData.password)}
        WHERE id = ${connection.escape(userData.id)}
        `;

        connection.query(sql, (err, res) => {
            if(err){
                throw err;
            } else {
                callback(null, {
                    "msg":"success"
                });
            }
        });
    }
}

userModel.deleteUser = (id, callback ) => {
    if(connection) {

        let sql = `SELECT * FROM users WHERE id = ${connection.escape(id)}`;
        connection.query(sql, (err, row) => {
            if(row) {
                let sql = `
                DELETE FROM users WHERE id = ${id}`;
                connection.query(sql, (err, row) =>{
                    if(err) {
                        throw err;
                    }else {
                        callback(null, {
                            "msg":"eliminado"
                        });
                    }
                });
            } else {
                callback(null, {
                    msg:'no existe'
                });
            }
        }); 
    }
}

module.exports = userModel;