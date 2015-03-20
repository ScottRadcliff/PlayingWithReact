var ExecutionHeader = React.createClass({
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
      <div>
        <h1>Week 1</h1>
        <WeeklyExecution data={this.state.data} />
        <PlanExecution data={this.state.data} />
      </div>
    )
  }
});

