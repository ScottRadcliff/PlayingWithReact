var React = require('react');

var PlanExecution = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Plan Execution</h2>
        <p><span id="average">{this.props.data.averagePercent}</span></p>
        <p><span id="complete">{this.props.data.completePercent}</span></p>
        <p><span id="ontime">{this.props.data.onTimePercent}</span></p>
      </div>
      );
    }
});

module.exports = PlanExecution;
