import {Router} from 'express'
import {inguser} from '../controllers/usercontrollers.js'

const router = Router()

// route config
router.get('/user', (req, res) => {
    res.render('login');
  });
  
router.post('/user', (req, res) => {
    const { username, password } = req.body;  });




export default router