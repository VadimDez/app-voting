'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var AnswerSchema = new mongoose.Schema({
  name: String,
  created: {
    type: Date,
    default: Date.now
  },
  session: String,
  poll: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Answer', AnswerSchema);
