import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) => {
    const {username,password} = req.body
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);


        if  (rows.length <= 0) {
          ver = false;
        } else {
          ver = true;
        }
      
        return res.json(ver);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
    }
      
      
      
      
      



