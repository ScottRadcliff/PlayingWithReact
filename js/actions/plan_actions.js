var AppDispatcher = require("../dispatcher/app_dispatcher");
var PlanConstants = require("../constants/plan_constants");

var PlanActions = {
  all: function() {
    AppDispatcher.dispatch({
      actionType: PlanConstants.PLAN_ALL
    });
  }
};

module.exports = PlanActions;
