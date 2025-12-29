
import jwt from 'jsonwebtoken';

export const generateToken = (userId,res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '7d' // token valid for 7 days
    });
    // Set token in HTTP-only cookie
    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days but in milliseconds
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'development' ? false : true , 
        // set secure flag in production 
    });
    return token;
};


 