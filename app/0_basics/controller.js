const kbe = kbe || {};

var firebaseUrl = "https://essen.firebaseio.com/";
var loaded = false;

var FoodBox = React.createClass({
  mixins: [ReactFireMixin],

  handleFoodSubmit: function(food) {
    // Here we push the update out to Firebase and let ReactFire update this.state.data
    this.firebaseRefs["data"].push(food);
  },

  handleFoodRemove: function(fbkey) {
    this.firebaseRefs["data"].child(fbkey).remove(function(error) {
      if (error) {
        console.log(error);
      }
    });
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
    //this.bindAsArray(new Firebase(firebaseUrl + "test"), "date");
  },

  render: function() {

    var nextDate = this.state.date;
    console.log(nextDate);

    new Firebase(firebaseUrl).on("value", function(snapshot) {
      loaded = true;
    });

    if (!loaded) {
      return (
        <div className="foodListApp">
          <div className="spinner"></div>
        </div>
      );
    } else {
      return (
        <div className="foodListApp">

          <section className="FoodListContainer">
            <h2>Essensliste</h2>
            <FoodList onFoodRemove={this.handleFoodRemove} data={this.state.data}/>
          </section>

          <aside className="FoodFormContainer">
            <h2>Neuer Eintrag</h2>
            <FoodForm onFoodSubmit={this.handleFoodSubmit}/>
          </aside>

        </div>
      );
    }
  }
});

React.render(
<FoodBox />,
  document.getElementById('content')
);
