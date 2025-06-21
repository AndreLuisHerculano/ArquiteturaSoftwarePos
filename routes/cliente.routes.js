const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente.controller');

router.post('/', controller.create);
router.get('/', controller.findAll);
router.get('/count', controller.count);
router.get('/search/:name', controller.findByName);
router.get('/:id', controller.findById);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
