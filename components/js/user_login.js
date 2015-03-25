var UserLogin = React.createClass({displayName: "UserLogin",
  render: function() {
    return (
      React.createElement("form", null, 
        React.createElement("input", {type: "email", name: "email", placeholder: "Email"}), 
        React.createElement("input", {type: "password", name: "password", placeholder: "Password"})
      )
    )
  }
});

React.render(React.createElement(UserLogin, null), document.getElementById("user-login"));
