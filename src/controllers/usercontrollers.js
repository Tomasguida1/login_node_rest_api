import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) => {
    const {username,password} = req.body
    try {
        console.log("Buscando usuario con el nombre de usuario y la contraseña:", username, password);
        const { result } = await pool.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
        console.log("Resultado de la consulta SQL:", result);
      
        if (result.length > 0) {
          ver = true;
        } else {
          ver = false;
        }
      
        return res.json(ver);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
      }
    }
      
      
      
      
      



