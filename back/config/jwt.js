import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";
configDotenv();

function verifyJWT(req,res,next){
    try {
        if(!process.env.SECRET){
            throw new Error('No Secret Key.');
        }
        const authHeader = req.headers.authorization;

        if(!authHeader?.startsWith('Bearer ')){
            return res.status(401).json({message:"Invalid token format"});
        }

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.SECRET,(err,decoded)=>{
            if(err){
                console.error('error in token verification:', err);
                return res.status(401).json({message:"Invalid token"});
            }
            next()
        });
    } catch (error) {
        console.error("jwt middleware error: ",error);
        return res.status(500).json({message:"authentication error"})
    }
}

export default verifyJWT;

