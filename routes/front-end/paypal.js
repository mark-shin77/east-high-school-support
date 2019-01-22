const router = require("express").Router();
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Ab8Cz0blhQx_mXWdzciSCRaB6k8s9eAxcAGcE0NOKYVpAnvzSjKGm5HP4HclBzen_q50bvQu646vrNuL',
    'client_secret': 'EA_lDMNp-NzEKJrzYybrLWO3jJKU_IWcRGfVanC41Sdrk_EDBBHECbWSdKMCXgHriwt-H0P3ic0HdEaW'
});

router.get("/", (req, res) => {
    res.send("Home Page")
})

// Pay route 
router.post("/pay", (req, res) => {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/donations/success",
            "cancel_url": "http://localhost:5000/donations/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "East High Donation",
                    "sku": "001",
                    "price": "",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": ""
            },
            "description": "East High Donations"
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log("-----------------------------------------")
            console.log(payment);
            console.log("-----------------------------------------")
            for ( let i = 0; i < payment.links.length; i++ ) {
                if (payment.links[i].rel === "approval_url") {
                    console.log(payment.links[i].href)
                    res.redirect(payment.links[i].href)
                }
            }
        }
    });
})

router.get("/success", (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId

    const execute_payment_json = {
        "payer_id" : payerId,
        "transactions" : [{
            "amount": {
                "currency" : "USD",
                "total" : ""
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send("Success");
        }
    })
});

router.get("/cancel", (req, res) => {
    res.send("Payment Cancelled");
})

module.exports = router;