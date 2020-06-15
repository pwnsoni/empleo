const controller = require('../controllers/users');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
  router.route('/users')
    .post(controller.add)
    .get(validateToken, controller.getAll); // This route will be protected
  
  router.route('/login')
    .post(controller.login);

  router.route('/test')
    .get(validateToken, (req, res) => {
        res.send( req.decoded.user +  "Its workin!!!!!!");
    })
};