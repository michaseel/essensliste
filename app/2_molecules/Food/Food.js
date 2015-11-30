/**
 * @name Molecule: Food
 * @description Molecule description here
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
let Food = React.createClass({
  handleRemove: function() {
    this.props.onFoodRemove(this.props.fbkey);
    return false;
  },
  render: function() {
    return (
      <div className="Food list-group-item">
        <h5 className="list-group-item-text">{this.props.children.toString()}</h5>
        <span className="author list-group-item-heading">von: {this.props.author}</span>
        <br />
        <button className="remove btn" aria-label="Eintrag löschen" onClick={this.handleRemove}></button>
      </div>
    );
  }
});
