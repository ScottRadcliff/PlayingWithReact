var React = require('react');

var UpdateForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var total = React.findDOMNode(this.refs.total).value;
    this.props.onFormSubmit({total: total})
     React.findDOMNode(this.refs.total).value = '';
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter a number" ref="total" />
        <input type="submit" value="Go!" />
      </form>
    )
  }
});

module.exports = UpdateForm;
