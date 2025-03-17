import express from 'express'
import User from '../models/User.js';

const router = express.Router()

router.post('/register', async (req, res) => {
try {
    const {userName, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) {
        return res.status(401).json({success: false, message:"User Already Exists"})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
        userName, email, password: hashPassword
    })

    return res.status(200).json({success: true, message: "Account Created"})
} catch {
    return res.status(200).json({success: false, message: "Error in Creating Account"})

}
})

export default router