const jwt = require('jsonwebtoken');

module.exports = {
    authenticate(req, res, next){
        jwt.verify(
            req.cookies.utoken,
            process.env.JWT_SECRET,
            (err, payload) =>{
                if(err){
                    res.status(401).json({verified: false, message: 'Please log in to continue.'});
                }
                else{
                    next();
                }
            }
        );
    },

    verify(req, res, next){
        jwt.verify(
            req.cookies.vtoken,
            process.env.JWT_SECRET,
            (err, payload) =>{
                if(err){
                    res.status(401).json({verified: false});
                }
                else{
                    const decodedJWT = jwt.decode(req.cookies.vtoken,{
                        complete: true
                    });
                    
                    if(decodedJWT.payload.verified){
                        next();
                    }
                    else{
                        res.status(401).json({message:'Please return to login and input verification code.',verified: false});
                    }
                }
            }
        );
    }
}