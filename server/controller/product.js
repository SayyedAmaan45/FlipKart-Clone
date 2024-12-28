let products=require("../model/products");

async function getProducts(req, res) {    
    let data = await products.getProducts(req.body).catch((error) => {
        return { error }
    })    
    if (!data || (data && data.error)) {
        let error = (data.error) ? data.error : "Internal Server Error";
        let status = (data.status) ? data.status : 500;
        return res.status(status).json({ error });
    }
    return res.send({data:data.data, message: "Products Fetched Successfully" })
}

async function getProductDetail(req, res) {    
    let data = await products.getProductDetail(req.params.id).catch((error) => {
        return { error }
    })    
    if (!data || (data && data.error)) {
        let error = (data.error) ? data.error : "Internal Server Error";
        let status = (data.status) ? data.status : 500;
        return res.status(status).json({ error });
    }
    return res.send({data:data.data, message: "Product Details Fetched Successfully" })
}

module.exports={getProducts,getProductDetail}