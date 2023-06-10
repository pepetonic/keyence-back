const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async ( req, res, next ) => {
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
        if( existUser ){
            return res.status(400).send({
                message:'User already exits'
            });
        }

        const passwordEncode = await bcrypt.hash(password,10);
        const user = new User ({ email:email, password: passwordEncode });
        await user.save();
        res.status(200).send({
            message:'Successfull'
        });

    } catch (error) {
        next(error);
    }
}