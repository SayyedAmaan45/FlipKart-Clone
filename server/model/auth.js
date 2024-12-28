const User = require("../schema/user");
let bcrypt = require("bcrypt");
let joi = require("joi");
let { validation } = require("../helper/validation");

async function signUp(params) {
    let schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        userName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        phoneNo: joi.string().required(),
    });
    let check = await validation(schema, params).catch((error) => {
        return { error };
    });
    if (!check || (check && check.error)) {
        return { error: check.error, status: 400 };
    }
    let user = await User.findOne({ userName: params.userName }).catch((error) => {
        return { error };
    });
    if (user) {
        return { error: "Username Already Exist", status: 400 };
    }
    let hashPass = await bcrypt.hash(params.password, 10).catch((error) => {
        return { error };
    });
    if (!hashPass || (hashPass && hashPass.error)) {
        return {
            error: "Error Occurred While Hashing Password... Please Try Again",
            status: 500,
        };
    }
    let data = {
        firstName: params.firstName,
        lastName: params.lastName,
        userName: params.userName,
        email: params.email,
        password: hashPass,
        phoneNo: params.phoneNo,
    };
    let insert = await User.create(data).catch((error) => {
        return { error };
    });    
    if (!insert || insert.error) {
        return { error: "Error Occurred While Saving Data", status: 500 };
    }
    return { data: insert };
}

async function login(params) {
    let schema = joi.object({
        userName: joi.string().required(),
        password: joi.string().required(),
    });
    let check = await validation(schema, params).catch((error) => {
        return { error };
    });

    if (!check || (check && check.error)) {
        return { error: check.error, status: 400 };
    }
    let user = await User.findOne({ userName: params.userName }).catch((error) => {
        return { error };
    });

    if (!user || (user && user.error)) {
        return { error: "Username Not Found...! Please Register First", status: 404 };
    }
    let ComparePass = await bcrypt.compare(params.password, user.password).catch((error) => {
        return { error };
    });

    if (!ComparePass || (ComparePass && ComparePass.error)) {
        return {
            error: "Invalid Password...! Please Provide Correct Password",
            status: 401,
        };
    };
    return { data: user }
}

module.exports = { signUp, login };
