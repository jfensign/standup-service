// Generated by CoffeeScript 1.10.0
(function() {
  var Socket, models;

  models = require('../models');

  Socket = (function() {
    function Socket() {}

    Socket.prototype.PeopleJoined = function(user, data) {
      return models.users.findById(user.userId, function(e, u) {
        return u.joinStandUp(data.StandUp, function() {
          return u.save();
        });
      });
    };

    Socket.prototype.PeopleLeft = function(user, data) {
      return models.users.findById(user.userId, function(e, u) {
        return u.leaveStandUp(data.StandUp, function() {
          return u.save();
        });
      });
    };

    Socket.prototype.PeopleOrderChanged = function(user, data) {};

    Socket.prototype.ActionItemsUpdated = function(user, data) {};

    Socket.prototype.StandUpStarted = function(user, data) {};

    return Socket;

  })();

  module.exports = new Socket;

}).call(this);
