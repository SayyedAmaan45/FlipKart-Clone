let authUser = require("../model/auth")

async function userSignUp(req, res) {    
    let data = await authUser.signUp(req.body).catch((error) => {
        return { error }
    })
    if (!data || (data && data.error)) {
        let error = (data.error) ? data.error : "Internal Server Error";
        let status = (data.status) ? data.status : 500;
        return res.status(status).json({ error });
    }
    return res.send({ data: data.data, message: "User Registered Successfully" })
}

async function userLogin(req, res) {    
    let data = await authUser.login(req.body).catch((error) => {
        return { error }
    })    
    if (!data || (data && data.error)) {
        let error = (data.error) ? data.error : "Internal Server Error";
        let status = (data.status) ? data.status : 500;
        return res.status(status).json({ error });
    }
    return res.send({ data: data.data, message: "User Logged In Successfully" })
}


module.exports = { userSignUp,userLogin }