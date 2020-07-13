const AuthenticationController = require ('./controllers/AuthenticationControler')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')

module.exports = (app) =>{
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
}
