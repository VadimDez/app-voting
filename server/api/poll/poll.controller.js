/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/polls              ->  index
 * POST    /api/polls              ->  create
 * GET     /api/polls/:id          ->  show
 * PUT     /api/polls/:id          ->  update
 * DELETE  /api/polls/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import mongoose from 'mongoose';
var Poll = require('./poll.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  //statusCode = statusCode || 200;
  //return function(entity) {
  //  if (entity) {
  //    res.status(statusCode).json(entity);
  //  }
  //};

  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      //res.status(statusCode).json(entity);
      Poll.populate(entity, [{path: 'user'}], function(err, _entity) {
        res.status(statusCode).json(_entity);
      });
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

function removeEntity(res, user) {
  return function(entity) {
    if (entity) {

      if (user.role !== 'admin' && entity.user !== user._id) {
        res.status(403).end();
      } else {

        return entity.removeAsync()
          .then(() => {
            res.status(204).end();
          });
      }
    }
  };
}

// Gets a list of Polls
export function index(req, res) {
  Poll.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

export function getMine(req, res) {


  Poll.findAsync({user: req.user._id})
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Poll from the DB
export function show(req, res) {
  Poll.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Poll in the DB
export function create(req, res) {
  var poll = new Poll(req.body);

  // add user
  poll.user = req.user._id;

  poll.saveAsync()
    //.then(responseWithResult(res, 201))
    .then((entity) => {
      //return function(entity) {
        if (entity) {
          Poll.populate(entity, [{path: 'user', select: '_id, name'}], function(err, _poll) {
            res.status(201).json(_poll);
          });
        }
      //}
    })
    .catch(handleError(res));
}

// Updates an existing Poll in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Poll.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Poll from the DB
export function destroy(req, res) {
  Poll.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res, req.user))
    .catch(handleError(res));
}
