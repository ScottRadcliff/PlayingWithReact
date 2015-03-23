var PlanExecution = React.createClass({displayName: "PlanExecution",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, "Plan Execution"), 
        React.createElement("p", null, React.createElement("span", {id: "average"}, this.props.data.averagePercent)), 
        React.createElement("p", null, React.createElement("span", {id: "complete"}, this.props.data.completePercent)), 
        React.createElement("p", null, React.createElement("span", {id: "ontime"}, this.props.data.onTimePercent))
      )
      );
    }
});

