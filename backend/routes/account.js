const express = require("express");
const authMiddleware = require("../middleware");
const { Account } = require("../database");
const router = express.Router();
const mongoose = require("mongoose");

// Routes to return the balance of the user
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })
    if(account) {
        return res.status(200).json({
            balance: account.balance
        })
    } else {
        return res.status(503).json({
            msg: "Incorrect Account Details!!!"
        })
    }
})

// Routes to implement the transaction between the users:
// router.post("/transfer", authMiddleware, async (req, res) => {
//     const { amount, to } = req.body;

//     const account = await Account.findOne({
//         userId: req.userId
//     });
//     if(account.balance < amount) {
//         return res.json({
//             msg: "Insufficient Balance"
//         })
//     }

//     const toAccount = await Account.findOne({
//         userId: to
//     })
//     if(!toAccount) {
//         return res.json({
//             msg: "Invalid Receiver's Account!!!"
//         })
//     }

//     await Account.updateOne({
//         userId: req.userId
//     }, {
//         $inc: {
//             balance: -amount
//         }
//     })

//     await Account.updateOne({
//         userId: to
//     }, {
//         $inc: {
//             balance: amount
//         }
//     })

//     res.status(200).json({
//         msg: "Transaction Successful"
//     })
// }) 

router.post("/transfer", authMiddleware, async (req, res) => {
    // Starting a session for the transaction:
    // The best use of the transaction in the database is that anything ails betwee the session start and end, will rollback all the changes that we have made: 
    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;

    // Fectching the account during the Transaction:
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance!!!"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session);
    if(!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid account!!!"
        })
    }

    // Perform the Transaction:
    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session);

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session);

    // Commiting the transaction:
    await session.commitTransaction();
    return res.status(200).json({
        msg: "Transaction successful---"
    })
})

module.exports = router;