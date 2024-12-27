import bcryptjs from "bcryptjs";
import { Schema, model } from "mongoose";
import config from "../../config";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            select: 0,
        },
        profilePhoto: {
            type: String,
         
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
    if (user.password) {
        user.password = await bcryptjs.hash(
            user.password,
            Number(config.bcrypt_salt_rounds)
        );
    }
    next();
});


// set '' after saving password
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});




userSchema.statics.isUserExistsByEmail = async function (email: string) {
    return await User.findOne({ email }).select("+password");
};

userSchema.statics.isPasswordMatched = async function (
    plainTextPassword,
    hashedPassword
) {
    return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
    passwordChangedTimestamp: number,
    jwtIssuedTimestamp: number
) {
    const passwordChangedTime =
        new Date(passwordChangedTimestamp).getTime() / 1000;
    return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model("User", userSchema);