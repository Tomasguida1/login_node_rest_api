import { pool } from "../db.js";


//user and password validation


export const inguser = async (req, res) => {
    const { username, password } = req.body;
    const users = await getUser(username);
    if (!users) {
      ver = false;
    }
    const passwordMatch = await bcrypt.compare(password, users.password);
    if (!passwordMatch) {
      ver = false;;
    }

  };


    



