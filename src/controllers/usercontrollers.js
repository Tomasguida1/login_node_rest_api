import { pool } from "../db.js";


//user and password validation


export const inguser = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

    pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, rows) => {
      if(rows.length > 0) {
        ver = true;
      } else {
        ver = false;
      }
    });
  }



    



