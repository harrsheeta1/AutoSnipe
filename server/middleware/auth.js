// middlewares/auth.js
import jwt from "jsonwebtoken";
export const authMiddleware=(req,res,next)=>{
  const token=req.headers.authorization?.split("")[1];
  if(!token)
  {
    return res.status(401).json({message:"NO token ,authorization denied"});
  }
  try{
      const decoded=jwt.verify(token,process.env.JWT_SECRET);
      req.user=decoded.id;
      next();
  }
  catch(err)
  {
    return res.status(401).json({message:"Token is not valid"});
  }
}
