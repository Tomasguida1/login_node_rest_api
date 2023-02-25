import {Router} from 'express'
import {inguser} from '../controllers/usercontrollers.js'

const router = Router()

// route config

router.post('/user',inguser)



export default router