import express from 'express'
import { test } from '../controllers/user.controller.js'

const router = express.Router()

router.get("/test",test)

 
// when exported with default, you can rename it when importing
export default router