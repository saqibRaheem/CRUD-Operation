const router = require('express').Router()
const userCtrl = require('../controller/userCtrl')

router.route('/user')

    .get(userCtrl.getdata)
    .post(userCtrl.createdata)

router.route('/user/:id')
    .delete(userCtrl.deletedata)
    .put(userCtrl.updatedata)

module.exports = router