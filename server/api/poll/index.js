'use strict';

var express = require('express');
var controller = require('./poll.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', controller.index);
router.get('/mine', auth.hasRole('user'), controller.getMine);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('user'), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', auth.hasRole('user'),controller.destroy);

module.exports = router;
