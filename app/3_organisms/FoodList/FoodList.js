/**
 * @name Organism: FoodList
 * @description Organism description here
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
let FoodList = React.createClass({
  render: function() {
    var foodNodes = this.props.data.map(function (food, index) {
      return <Food key={index} author={food.author}>{food.text}</Food>;
    });
    if(!foodNodes.length){
      return(
        <div className="FoodList list-group">
          <div className="Food list-group-item">Noch keine Einträge…</div>
        </div>
        );
    }
    else
    {
      return <div className="FoodList list-group">{foodNodes}</div>;
    }
  }
});
