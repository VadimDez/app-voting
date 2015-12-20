'use strict';

var express = require('express');
var controller = require('./answer.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', auth.attachUserIfHasToken(), controller.index);
router.get('/:id', controller.show);
router.get('/aggregate/:poll', controller.aggregate);
router.post('/', auth.attachUserIfHasToken(), controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
