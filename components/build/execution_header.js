var ExecutionHeader = React.createClass({displayName: "ExecutionHeader",
  loadDataFromServer: function() {
     $.ajax({
      url: "http://localhost:4000/data.json",
      dataType: "json", 
      success: function(response) {
        this.setState({data: response});
      }.bind(this)
    });
 },

  updateServer: function(total) {
    $.ajax({
      url: "http://localhost:4000/update",
      method: "POST",
      data: {total: total.total},
      success: function(response) {
        this.setState({data: response});
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadDataFromServer();
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Week 1"), 
        React.createElement(WeeklyExecution, {data: this.state.data}), 
        React.createElement(PlanExecution, {data: this.state.data}), 
        React.createElement(UpdateForm, {onFormSubmit: this.updateServer})
      )
    )
  }
});

