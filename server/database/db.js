
let mongoose = require("mongoose");

let mongoCon = async (username, password) => {
    const mongoURI = `mongodb+srv://${username}:${password}@cluster1.lvzeb.mongodb.net/`;
    await mongoose.connect(mongoURI).then(() => { return console.log("Connected To MongoDB"); }).catch((error) => {
        return console.log("Error Connecting To MongoDB", error.message);
    })
}

module.exports = mongoCon;