const User = require('../models/User');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

exports.login = async( req,res,next )=>{
    try {
        const { email, password } = req.body
        //Verify if both fields exits
        if(!email || !password){
            return res.status(400).send({
                message:'Please. Write all fields'
            });
        }

        //Verify if user exist
        const existUser = await User.findOne({ email });
        if( !existUser ){
            return res.status(404).send({
                message:'User doesn´t exits'
            });
        }

        //Verify password
        const isPasswordValid = await bcrypt.compare(password, existUser.password);
        if( !isPasswordValid ){
            return res.status(400).send({
                message:'Wrong Password'
            });
        }
        //Generate token
        const token = jwt.sign({ email: existUser.email }, config.get('secretKey'), { expiresIn: '1h' });
        res.status(200).send({
            message:'Successfull',
            token: token
        });
    } catch (error) {
        next(error);
    }
}