
// const { products } = require("./constants/data.js")
// let Product = require("./schema/product.js")

// let DefaultData = async () => {
//     try {
//         // await Product.deleteMany({});
//         await Product.insertMany(products);
//         console.log("Default Data Imported Succesfully");
//     }
//     catch (error) {
//         console.log('Error While Inserting Default Data', error.message);
//     }
// }

// module.exports = DefaultData;


const { products } = require("./constants/data.js")
let Product = require("./schema/product.js")

async function defaultData() {
    // await Product.deleteMany({});
    let product = await Product.insertMany(products).catch((error) => {
        return { error }
    })
    if (product.error) {
        console.log('Error While Inserting Default Data', product.error.message);
    }
    console.log("Default Data Imported Succesfully");
}


module.exports = defaultData;