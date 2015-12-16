/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/answers              ->  index
 * POST    /api/answers              ->  create
 * GET     /api/answers/:id          ->  show
 * PUT     /api/answers/:id          ->  update
 * DELETE  /api/answers/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Answer = require('./answer.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Answers
export function index(req, res) {
  Answer.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Answer from the DB
export function show(req, res) {
  Answer.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Answer in the DB
export function create(req, res) {
  var answer = new Answer({
    name: req.body.name,
    user: req.user._id,
    poll: req.body.poll
  });

  answer.saveAsync()
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Answer in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Answer.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Answer from the DB
export function destroy(req, res) {
  Answer.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
