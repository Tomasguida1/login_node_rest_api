import { pool } from "../db.js";


//user and password validation


export const inguser = function(request, response)  {
    let username = request.body.username;
	let password = request.body.password;
    if (username && password) {
    pool.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {       
        if (error) 
        ver = false;
        if (results.length > 0) {
            ver = true;
        }
    })}};


    



