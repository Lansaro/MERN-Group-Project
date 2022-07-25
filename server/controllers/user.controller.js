const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const user = new User(req.body);
        const newUser= await user.save();
        console.log('NEW USER', newUser);
        const userToken = jwt.sign
        ({
            id: newUser._id,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName
        },
            SECRET,
        );
            res.status(201).cookie('userToken', userToken, 
            {
                httpOnly: true,
                expires: new Date(Date.now()+ 900000)
            })
            .json({successMessage: 'user created', user : {
                _id: newUser._id,
                email: newUser.email,
                password: newUser.password,
                firstName: newUser.firstName,
                lastName: newUser.lastName
            }
        });
    } catch (err){
        console.log(err)
        res.json(err)
    }
}

const login = async (req, res) => {
    const userDoc = await User.findOne({email: req.body.email});
    if (!userDoc){
        res.status(400).json({message: 'Invalid Email'})
    }
    else {
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password, userDoc.password)
            if(!isPasswordValid){
                res.status(400).json({message: 'invalid password'});
            }else {
                const userToken = jwt.sign
                    ({
                        _id: userDoc._id,
                        email: userDoc.email,
                        firstName: userDoc.firstName,
                        lastName: userDoc.lastName
                    },
                    SECRET,
                );
                    res.status(201).cookie('userToken', userToken, {
                        httpOnly: true,
                        expires: new Date(Date.now()+ 900000)
                    })
                    .json({successMessage: 'User logged in', user : {
                        _id: userDoc._id,
                        email: userDoc.email,
                        password: userDoc.password,
                        firstName: userDoc.firstName,
                        lastName: userDoc.lastName
                    }
                });
            }
        } catch (e){
            console.log('LOGIN ERROR')
            res.status(400).json({message: 'Invalid Login'})
        }
    }
};

const logout = (req, res) => {
    console.log('logging out');
    res.clearCookie('userToken');
    res.json({
        message:'You have successfully logged out!'
    })
}

const getLoggedInUser = async (req, res) =>{
    try{   
        const userPayload = jwt.verify(req.cookies.userToken, SECRET)
        // console.log(user)
        const user = await User.findOne({_id : userPayload._id});
        console.log(user)
        res.json(user);
    } catch(err){
        console.log(err);
        res.status(400).json({err})
    }
};

module.exports = { register, login, logout, getLoggedInUser };