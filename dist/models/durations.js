// Generated by CoffeeScript 1.10.0

/*
_id: int
minutes: int // time in minutes, unique
 */

(function() {
  var Duration, DurationSchema, collection, d_config, mongoose, schema;

  mongoose = require('mongoose');

  d_config = require('../config/durations');

  schema = mongoose.Schema;

  collection = 'Duration';

  DurationSchema = new schema({
    minutes: {
      type: schema.Types.Number,
      require: true,
      unique: true
    }
  });

  Duration = mongoose.model(collection, DurationSchema);

  Duration.schema.path('minutes').validate(function(value) {
    return !!~d_config.minutes.indexOf(~~value);
  });

  module.exports = Duration;

}).call(this);
