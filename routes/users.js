const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/User');
const gravatar = require('gravatar');
const secret = require('../config/keys').secret;
const jwt = require('jsonwebtoken');

router.get('/test', (req,res) => res.json({msg: 'User Works'}));

router.post('/register', (req,res) => {
User.findOne({ email: req.body.email})
.then(user => {
    if(user) {
        return res.status(400)
        .json({email:'Email already exits'})
    }
    else {
        const avatar = gravatar.url(req.body.email, {
            s: '200', // Size
            r: 'pg', // Rating
            d: 'mm' // Default
          });

        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            avatar: avatar
        });

        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) =>{
                if (err) throw wrr;
                    newUser.password = hash;
                    newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err =>
                    console.log(err));
            })
        })
    }
})
});


router.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user =>{
        if(!user){
            return res.status(400).json({ email: "User account does not exist"})
        }
        else{
            bcrypt.compare(password,user.password).then(isMatch => {
                if(isMatch){
                    const payload = { id: user.id, name: user.name, avatar: user.avatar };
                    jwt.sign(
                        payload,
                        secret,
                        { expiresIn: 3600 },
                        (err, token) => {
                          res.json({
                            success: true,
                            token: 'Bearer ' + token
                          });
                        }
                      );
                }
                else {
                    return res.status(400).json({ email: "Password is invalid"})
                }
            })
        }
    })
});

module.exports = router;
