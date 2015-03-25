var UpdateForm = React.createClass({displayName: "UpdateForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var total = React.findDOMNode(this.refs.total).value;
    this.props.onFormSubmit({total: total})
    React.findDOMNode(this.refs.total).value = '';
  },

  render: function() {
    return (
      React.createElement("form", {onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "txt", placeholder: "Enter a number", ref: "total"}), 
        React.createElement("input", {type: "submit", value: "Go!"})
      )
    )
  }
});
