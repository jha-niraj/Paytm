// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { userZodSchemaSignUp, userZodSchemaSignIn, updateUserBody } = require("../zod");
const { User, Account } = require("../database");
const authMiddleware = require("../middleware");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config"); 

// Sign Up Router:
router.post("/signup", async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    console.log(firstName);

    const parsedValue = userZodSchemaSignUp.safeParse({firstName, lastName, username, password});

    if(!parsedValue.success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username
    })
    if(existingUser) {
        return res.status(411).json({
            message: "Email already taken / Please choose another gmail!!!"
        })
    }

    const newUser = await User.create({ firstName, lastName, username, password });
    const userId = newUser._id;

    // Creating new Account on the Bank Schema and putting random amount so that a user can start with:
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({ userId }, jwt_secret);
    res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

// Sign In Router:
router.post("/signin", async (req, res) => {
    const {username, password} = req.body;

    const parsedValue = userZodSchemaSignIn.safeParse({username, password});
    if(!parsedValue.success) {
        return res.status(411).json({
            message: "Incorrect inputs/ Wrong username"
        })
    }
    const user = await User.findOne({
        username,
        password
    })
    if(user) {
        const token = jwt.sign({username}, jwt_secret);
        res.status(200).json({
            message: "Login Successful",
            token: token
        })
        return;
    }
    
    res.status(411).json({
        message: "Error while logging in!/ User not found!!!"
    })
})

// User routes to update the information via userId token:
router.put("/", authMiddleware, async (req, res) => {
    const { firstName, lastName, password } = req.body;
    const parsedValue = updateUserBody.safeParse({firstName, lastName, password});

    if(!parsedValue.success) {
        return res.status(411).json({
            message: "Error while updating information!!!"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, {firstName, lastName, password});

    res.json({
        message: "Updated Successfully"
    })
})
// User routes to update the information via username token:
// router.put("/update", authMiddlewareUsername, async (req, res) => {
//     const { firstName, lastName, password } = req.body;
//     const parsedValue = updateUserBody.safeParse({firstName, lastName, password});

//     if(!parsedValue.success) {
//         return res.status(411).json({
//             message: "Error while updating information!!!"
//         })
//     }

//     await User.updateOne({
//         username: req.username
//     }, {firstName, lastName, password});

//     res.json({
//         message: "Updated Successfully"
//     })
// }) 

// Getting an bulk of user list upon the match of the name given in the filter param:
router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    if(users) {
        return res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                id: user._id
            }))
        })
    } else {
        return res.json({
            msg: "User doesnt exist in the database!!!"
        })
    }
})

module.exports = router;