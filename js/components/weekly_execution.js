var React = require('react');

  var WeeklyExecution = React.createClass({
    render: function() {
        return (
          <div>
            <h2>Weekly Execution</h2>
            <p><span id="last-week">{this.props.data.lastWeekPercent}</span></p>
            <p><span id="current-week">{this.props.data.thisWeekPercent}</span></p>
          </div>
        );
      }
  });

module.exports = WeeklyExecution;
