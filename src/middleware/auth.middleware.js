import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next)=> {
  const authHeader = req.headers.authorization;
  //check if header exist and start with Bearer 
if(!authHeader){
return res.status(401).json({message: "Authorization header missing"});
}
//extract token
const token = authHeader.split(" ")[1];
if(!token){
  return res.status(401).json({message: "token missing"});
}
try{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next(); //allow access
}catch(error){
  return res.status(401).json({message: "invalid token"});
}

};

export default AuthMiddleware;