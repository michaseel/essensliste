/**
 * @name Molecule: Food
 * @description Molecule description here
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
let Food = React.createClass({
  render: function() {
    return (
      <div className="Food list-group-item">
        <h5 className="list-group-item-text">{this.props.children.toString()}</h5>
        <span className="author list-group-item-heading">von: {this.props.author}</span>
      </div>
    );
  }
});
