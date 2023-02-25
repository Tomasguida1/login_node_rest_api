import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) => {
    const {username, password} = req.body

    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, rows) => {
      if(rows.length > 0) {
        ver = true;
      } else {
        ver = false;
      }
    });
  }



    



