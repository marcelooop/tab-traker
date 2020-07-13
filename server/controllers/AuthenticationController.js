const {user} = require('../models')
const User = require('../src/models/User')

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(res.body)
            res.send(user.toJSON())
        }
        catch (err){
            res.status(400).send({
                error: 'This email account is alredy in use'
                
            })
        }
    }
}
