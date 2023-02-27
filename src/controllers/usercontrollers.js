import { pool } from "../db.js";


//user and password validation


export const inguser = (req, res) => {
    const {username} = req.body
    const {password} = req.body
    try {
        console.log("Buscando usuario con el nombre de usuario y la contraseña:", username, password);
        const { rows } =  pool.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
        console.log("Resultado de la consulta SQL:", rows);

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
      
      
      
      
      



