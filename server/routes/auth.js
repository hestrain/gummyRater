import express from 'express'
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import JsonWebTokenError from 'jsonwebtoken';

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
    await newUser.save();

    return res.status(200).json({success: true, message: "Account Created"})
} catch {
    return res.status(200).json({success: false, message: "Error in Creating Account"})

}
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email});
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({message: 'invalid credentials'})
    }
    const token = JsonWebTokenError.toString({ id:user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });


})

export default router