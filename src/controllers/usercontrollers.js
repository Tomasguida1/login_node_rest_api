import { pool } from "../db.js";


//user and password validation


export const inguser = async (req, res) => {

	const username = "mochilote";
	const password = "gipeto2015";   
    
    if (username && password) {
        pool.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], async (err, result) => {
        if (result.length == 0){
            ver = false;
        }else{
            ver = true;
        }
     }
    )
}else{
    console.log("me ejecute");
}
}

