import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) =>{
try {
    const {username, password} = req.body 
	usern = await pool.query('SELECT * FROM users') ;


		}catch (error) {
        return res.status(500).json({message: "error"})    
    }
}

    



