import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
try{
        
        const {result} =  await pool.query("SELECT * FROM users WHERE id = 1 AND username = ? AND password = ?",[username, password] ) ;
        if(result.length > 0){
            ver = true;
        } else {
          ver = false;
        }

        res.json(ver);
        res.end();

}catch(error){
    return res.status(500).json({message: error}) 
}
}
    



