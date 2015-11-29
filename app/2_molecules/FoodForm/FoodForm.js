/**
 * @name Molecule: FoodForm
 * @description Molecule description here
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
let FoodForm = React.createClass({
  handleSubmit: function() {
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    this.props.onFoodSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return false;
  },

  render: function() {
    return (
      <form className="FoodForm form-group" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-12">
            <label>Name</label>
            <input required type="text" placeholder="Name" ref="author" className="form-control"/></div>
          <div className="col-sm-12">
            <label>Was bringst du mit?</label>
            <input required type="text" placeholder="z.B. Suppe..." ref="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <input type="submit" value="Senden" className="btn btn-primary" />
          </div>
        </div>
      </form>
    );
  }
});
