const {protect} = require('../middleware/AuthMiddleware')

module.exports = (app) => {
    const controller = require('../controller/UserController')

    app.post('/api/users', controller.registerUser)
    app.post('/api/users/login', controller.loginUser)
    app.post('/api/users/authenticate', protect, controller.authenticate)
    app.get('/api/users/me', protect, controller.getMe)
}

