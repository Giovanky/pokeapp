import {Router} from 'express'
import {authController} from '../controllers/authController'

const router: Router = Router()

router.post('/signup', authController.signup)

router.post('/signin', authController.signin)

export default router