import { pool } from "../db.js";


//user and password validation


export const inguser = async (req, res) => {
    const { username, password } = req.body;
    const query = ("SELECT * FROM user WHERE username = '${username}' AND password = '${password}'"); 
    pool.query(query, (error, results) => {
    if (error) throw error;
    
    if (results.length > 0) {    
            ver: false;
    } else {

            ver:true;
    }
  });
};


    



