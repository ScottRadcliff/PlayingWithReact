var AppDispatcher = require('../dispatcher/app_dispatcher');
var EventEmitter = require('events').EventEmitter;
var PlanConstants = require('../constants/plan_constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _plans = {};


var PlanStore = assign({}, EventEmitter.prototype, {
  all: function() {
    alert("yup 2");
    return _plans;
  }
});

module.exports = PlanStore;
