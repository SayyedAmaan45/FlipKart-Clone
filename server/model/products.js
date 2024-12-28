const Product = require("../schema/product")

async function getProducts() {
    let product = await Product.find({}).catch((error) => {
        return { error }
    })
    if (!product || (product && product.error)) {
        return { error: "Error while fetching products", status: 500 };
    }
    return { data: product }
}

async function getProductDetail(productId) {
    let productDetail = await Product.findOne({ 'id': productId }).catch((error) => {
        return { error }
    })
    if (!productDetail || (productDetail && productDetail.error)) {
        return { error: "Error while fetching product detail", status: 500 }
    }
    return { data: productDetail }
}

module.exports = { getProducts, getProductDetail };