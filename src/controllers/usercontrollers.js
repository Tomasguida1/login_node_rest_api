import { pool } from "../db.js";


//user and password validation


export const inguser = function(request, response){

    var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
               ver = true;
			} else {
				ver = false;
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
};

    



