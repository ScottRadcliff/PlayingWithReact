var React = require('react');
var ExecutionHeader = require('./components/execution_header.js');
var UserLogin = require('./components/user_login.js');

React.render(<ExecutionHeader/>, document.getElementById("example"));
React.render(<UserLogin />, document.getElementById("user-login"));
