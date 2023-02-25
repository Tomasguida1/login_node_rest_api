import { pool } from "../db.js";


//user and password validation


export const inguser = async(req, res) =>{

    const {username, password} = req.body 
	usern = await pool.query('SELECT username FROM users') ;
			if (username === usern) {
                pass = pool.query('SELECT password FROM users')
                if (password=== pass) {
                ver = true;
                } else {
                    ver = false;
                }
			    } else {
				    ver = false;
			}			

		};


    



