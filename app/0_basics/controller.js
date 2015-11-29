const kbe = kbe || {};

var firebaseUrl = "https://essen.firebaseio.com/";

var FoodBox = React.createClass({
  mixins: [ReactFireMixin],

  handleFoodSubmit: function(food) {
    // Here we push the update out to Firebase and let ReactFire update this.state.data
    this.firebaseRefs["data"].push(food);
  },

  getInitialState: function() {
    return {
      data: []
    };
  },

  componentWillMount: function() {
    // Here we bind the component to Firebase and it handles all data updates,
    // no need to poll as in the React example.
    this.bindAsArray(new Firebase(firebaseUrl + "foodListApp"), "data");
  },

  render: function() {
    return (
      <div className="foodListApp">

        <section className="FoodListContainer">
          <h2>Essensliste</h2>
          <FoodList data={this.state.data} />
        </section>

        <aside className="FoodFormContainer">
          <h2>Neuer Eintrag</h2>
          <FoodForm onFoodSubmit={this.handleFoodSubmit} />
        </aside>

    </div>
    );
  }
});

React.render(
<FoodBox />,
  document.getElementById('content')
);
