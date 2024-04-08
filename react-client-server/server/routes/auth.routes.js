const Router = require("express");
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {check, validationResult} = require("express-validator");
const router = Router();

router.post("/registration", 
    [
        check("name", "Uncorrect name"),
        check("password", "Uncorrect password").isLength({min:3, max:12}),
    ],
    async (req, res) => {
    try {
        console.log(req.body);

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({message: "Uncorrect request", errors});
        }

        const {name, password} = req.body;
        const candidate = await User.findOne({name})

        if(candidate) {
            return res.status(400).json({message: `User with name ${name} already exist`});
        }
        const hashPassword = await bcrypt.hash(password, 2);
        const user = await new User({name, password: hashPassword});
        await user.save();
        return res.json({message:"User was created"});

    } catch (e) {
        console.log(e);
        res.send({message:`Server error ${e}`});
    }

})

router.post("/login", 
    async (req, res) => {
        try {

            const {name, password} = req.body;
            console.log(req.body);
            
            const user = await User.findOne({name});

            if(!user) {
                return res.status(404).json({message: "User not found"});
            }

            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }

            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    // id: user.id,
                    name: user.name,
                    // email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    // avatar: user.avatar
                }
            })

        } catch (e) {
            console.log(e);
            res.send({message:`Server error ${e}`});
        }
    }
)

module.exports = router;