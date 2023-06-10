const UserCatalog = require('../models/UserCatalog');

exports.getAllUsersOnCatalogs = async ( _, res, next ) => {
    try {
        const userCatalog = await UserCatalog.find();
        res.status(200).send({
            message:'Successfull',
            data: userCatalog
        });

    } catch (error) {
        next(error);
    }
}

exports.postOneUserOnCatalog = async ( req, res, next ) => {
    try {
        const { userId, userName, date, punchIn, punchOut } = req.body;

        if( !userId || !userName || !date || !punchIn || !punchOut ){
            return res.status(400).send({
                message:'Please. Write all fields'
            });
        }

        const user = new UserCatalog ({ 
            userId      :userId, 
            userName    :userName, 
            date        :date, 
            punchIn     :punchIn, 
            punchOut    :punchOut
        });

        const result = await user.save();

        res.status(200).send({
            message:'Successfull',
            data:result
        });
    } catch (error) {
        next(error);
    }
}

exports.patchOneUserOnCatalog = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        const { userId, userName, date, punchIn, punchOut } = req.body;
        if( !id ){
            return res.status(400).send({
                message:'Bad request: Missing ID'
            });
        }
        let user = await UserCatalog.findById(id);

        if( !user ){
            return res.status(404).send({
                message:'User not found'
            });
        }

        user.userId = userId;
        user.userName = userName;
        user.date = date;
        user.punchIn = punchIn;
        user.punchOut = punchOut;

        const updatedUser = await user.save();

        res.status(200).send({
            message: 'Successfull',
            data: updatedUser
        });
    } catch (error) {
        next(error);
    }
}

exports.deleteOneUserOnCatalog = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        if( !id ){
            return res.status(400).send({
                message:'Bad request: Missing ID'
            });
        }

        const user = await UserCatalog.findById(id);
      
        if (!user) {
          return res.status(404).send({
            message: 'User not found',
          });
        }
      
        await user.deleteOne();
      
        res.status(200).send({
          message: 'User deleted',
        });
    } catch (error) {
        next(error);
    }
}