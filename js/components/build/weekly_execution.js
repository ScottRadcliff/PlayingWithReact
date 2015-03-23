  var WeeklyExecution = React.createClass({displayName: "WeeklyExecution",
    render: function() {
        return (
          React.createElement("div", null, 
            React.createElement("h2", null, "Weekly Execution"), 
            React.createElement("p", null, React.createElement("span", {id: "last-week"}, this.props.data.lastWeekPercent)), 
            React.createElement("p", null, React.createElement("span", {id: "current-week"}, this.props.data.thisWeekPercent))
          )
        );
      }
  });

