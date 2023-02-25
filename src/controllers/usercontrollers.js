import { pool } from "../db.js";


//user and password validation


export const inguser = function(request, response, next){

    var username = request.body.username;

    var password = request.body.password;

    if(username && password)
    {
        query = `
        SELECT * FROM users 
        WHERE username = "${username}"
        `;

        pool.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].password == password)
                    {
                        

                        ver = true;
                    }
                    else
                    {
                        ver = false;
                    }
                }
            }
            else
            {
                ver = false;
            }
            response.end();
        });

    };
};

    



