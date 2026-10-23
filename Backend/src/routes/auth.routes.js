import {Router} from "express"
import { validateRegisterUser } from "../validator/auth.validator";

const router = Router();


// post /api/auth/login
router.post('/register',validateRegisterUser)



export default router