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

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadDataFromServer();
    setInterval(this.loadDataFromServer, 3000);
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Week 1"), 
        React.createElement(WeeklyExecution, {data: this.state.data}), 
        React.createElement(PlanExecution, {data: this.state.data})
      )
    )
  }
});

