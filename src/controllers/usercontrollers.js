import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) =>{
try {
    const {username, password} = req.body 
	const [usern] = await pool.query('SELECT * FROM users') ;
    res.json(rows)


		}catch (error) {
        return res.status(500).json({message: "error"})    
    }
}

    



