import { pool } from "../db.js";


//user and password validation


export const inguser = (req, res) => {
  
try{

        const result = pool.query("SELECT * FROM users") 

                res.json(result)

}catch(error){
    return res.status(500).json({message: "error"}) 
}
}
    



