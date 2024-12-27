import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { User } from '../user/user.model';
import AppError from '../../error/AppError';
import { createToken } from '../../utils/verifyJWT';
import config from '../../config';
import bcryptjs from 'bcryptjs';

const loginUser = catchAsync(async (req, res) => {
    const payload = req.body;

    // checking if the user is exist
    const user = await User.findOne({ email: payload?.email }).select("+password");

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }

    //checking if the password is correct

    if (!(await bcryptjs.compare(payload?.password, user?.password)))

        throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

    //create token and sent to the  client

    const jwtPayload = {
        name: user.name,
        email: user.email,
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    );




    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully!',
        data: {
            accessToken,
        },
    });
});

export const AuthControllers = {
    loginUser,

};

