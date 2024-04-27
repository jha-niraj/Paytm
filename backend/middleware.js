// backend/middleware.js
const { jwt_secret } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(403).json({
            message: "Auth Header Error!!!"
        });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, jwt_secret);
        console.log(decoded.userId);
        if(decoded.userId) {
            req.userId = decoded.userId;
            next();
        } else {
            return res.status(403).json({
                message: "Token Error!!!"
            });
        }
    } catch(error) {
        return res.status(403).json({
            message: "Error!!!"
        })
    }
}

// Authentication when user send the token during Sign In:
// const authMiddlewareUsername = (req, res, next) => {
//     const authHeader = req.headers.authorization;
    
//     if(!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(403).json({
//             message: "Auth Header Error!!!"
//         });
//     }

//     const token = authHeader.split(' ')[1];
//     try {
//         const decoded = jwt.verify(token, jwt_secret);
//         console.log(decoded.username);
//         if(decoded.username) {
//             req.username = decoded.username;
//             next();
//         } else {
//             return res.status(403).json({
//                 message: "Token Error!!!"
//             });
//         }
//     } catch(error) {
//         return res.status(403).json({
//             message: "Error!!!"
//         })
//     }
// }

// module.exports = { 
//     authMiddlewareUserId,
//     authMiddlewareUsername
// }

module.exports = authMiddleware;