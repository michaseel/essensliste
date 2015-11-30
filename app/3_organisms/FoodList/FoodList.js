/**
 * @name Organism: FoodList
 * @description Organism description here
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
let FoodList = React.createClass({
  handleRemove: function(food) {
    this.props.onFoodRemove(food);
    return false;
  },
  render: function() {
    var foodNodes = this.props.data.map((food, index) => {
      console.log(food['.key']);
      return <Food onFoodRemove={this.handleRemove} key={index} fbkey={food['.key']} author={food.author} >{food.text}</Food>;
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
