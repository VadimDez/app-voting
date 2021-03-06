'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PollSchema = new mongoose.Schema({
  question: String,
  options: [String],
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Poll', PollSchema);
