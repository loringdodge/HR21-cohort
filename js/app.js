App = Ember.Application.create();

App.Router.map(function() {
  this.route("profile", { path: "/profile" });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
  	var array = [
      { person : "Loring Dodge", image : "images/carolinewong.jpg" },
      { person : "Mike Hart", image : "images/alexzai.jpg" },
      { person : "Jimmy Gong", image : "images/jimmygong.jpg" },
  	];
  	for(var i = 0; i < 31; i++){
  		array.push({ person : "person", image : ""});
  	}
    return array;
  },
});

App.ProfileRoute = Ember.Route.extend({
  model: function() {
    return {
      id : "123",
      firstName : "Loring",
      lastName : "Dodge",
      image : "images/alexzai.jpg"
    }
  }
});
