import { Router } from 'express'
import { authRequired } from '../middlewares/validatetoken.js'


const router = Router()

router.get('/tasks',authRequired, (req, res) => res.send('tasks'))

export default router