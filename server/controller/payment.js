let dotEnv = require("dotenv");
dotEnv.config();
let crypto = require("crypto");
let axios = require("axios");

const SALT_KEY = process.env.SALT_KEY;
const MERCHANT_ID = process.env.MERCHANT_ID;

async function addPaymentGateway(req, res) {
    try {

        let merchantTransactionId = req.body.transactionId

        const data = {
            merchantId: MERCHANT_ID,
            merchantTransactionId: merchantTransactionId,
            name: req.body.name,
            amount: req.body.amount * 100,
            redirectUrl: `http://localhost:8000/status?id=${merchantTransactionId}`,
            redirectMode: 'POST',
            mobileNumber: req.body.mobileNo,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        }


        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        // This is For Live Project Perpose!!
        // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

        // This is For Testing Project Perpose!!
        const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

        const options = {
            method: 'POST',
            url: prod_URL,
            headers: {
                accept: "application/json",
                'Content-Type': 'application/json',
                "X-VERIFY": checksum
            },
            data: {
                request: payloadMain
            }
        }

        await axios(options).then(function (response) {
            return res.json(response.data)
            
        }).catch(function (error) {
            console.log(error.message);
            res.status(500).json({ error: error.message })
        })
    }
    catch (error) {
        console.log(error);
    }

}

async function phonePeStatus(req, res) {
    try {

        const merchantTransactionId = req.query.id;
        const merchantId = MERCHANT_ID;

        const keyIndex = 1;
        const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;


        const options = {
            method: 'GET',
            url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': `${merchantId}`
            }
        }

        await axios(options).then(response => {
            if (response.data.success === true) {
                const url = "http://localhost:3000/";
                return res.redirect(url)
            } else {
                const url = "http://localhost:3000/";
                return res.redirect(url)
            }
        })


    }
    catch (error) {
        console.log(error);

    }
}

module.exports = { addPaymentGateway, phonePeStatus }

