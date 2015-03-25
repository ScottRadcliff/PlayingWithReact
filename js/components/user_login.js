var React = require('react');
var PlanActions = require("../actions/plan_actions.js");

var UserLogin = React.createClass({
  login: function(e) {
    e.preventDefault();
    console.log(PlanActions.all());
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    $.ajax({
      url: "http://localhost:3000/api/sessions",
      method: "POST",
      dataType: "json",
      data: {username: username, password: password},
      success: function(response) {
        console.log("Success: " + response);
      },
      failure: function(response) {
        console.log("Failure: " + response);
      }
    })
  },

  render: function() {
    return (
      <form onSubmit={this.login}>
        <input type="text" ref="username" placeholder="Email" />
        <input type="password" ref="password" placeholder="Password"/>
        <input type="submit" value="Login" />
      </form>
    )
  }
});

module.exports = UserLogin;
