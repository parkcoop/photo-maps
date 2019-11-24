const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../utils')
const User = require('../connectors')

signup = async (parent, args) => {
    const password = await bcrypt.hash(args.password, 10)
    const authPayload = await User.find({username:args.username})
        .then(user => {
            if (user.length) return new Error('User already exists')
            const newUser = new User({
                username: args.username,
                password: password
            });
            newUser.save();
            const token = jwt.sign({userId: user.id}, APP_SECRET)
            return {
                token,
                user: newUser,
            }
        })
        .catch(err=> console.log(err))
    return authPayload
}

login = async (parent, args) => {
    return User.findOne({username:args.username})
        .then(async user=>{
            if (!user) return new Error('no user found')
            // let password = await bcrypt.hash(args.password, 10, (err, hash) => {
                const valid = bcrypt.compare(args.password, user.password)
                console.log(valid, args.password, user.password)
                // const valid = (args.password === user.password)
                // if (!valid) return new Error('invalid password')
                if (valid) {
                    const token = jwt.sign({userId: user.id}, APP_SECRET)
                    return {
                        token,
                        user
                    }
                }
            // })

          
        })
        .catch(err=> {
            console.log(err)
        })
}


module.exports = {
    signup,
    login,
}