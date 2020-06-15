const userController = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/users')
    .post(userController.add)
    .get(validateToken, userController.getAll) // This route will be protected
    .put(validateToken, userController.update);
  
  router.route('/login')
    .post(userController.login);

  router.route('/test')
    .get(validateToken, (req, res) => {
        res.send( req.decoded.user +  "Its workin!!!!!!");
    })
};