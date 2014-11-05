App = Ember.Application.create();

App.Router.map(function() {
  this.route("profile", { path: "/profile" });
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
  	return People;
  },

});

App.ProfileRoute = Ember.Route.extend({
  model: function() {
    return {
      id : "123",
      firstName : "Loring",
      lastName : "Dodge",
      image : "images/alexzai.jpg",
      bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
  }
});

App.IndexController = Ember.Controller.extend({
  templateName: 'index',
  firstName : "",
  lastName : "",
  events: {
    nameShow: function(firstName, lastName) {
      this.set('firstName', firstName).set('lastName', lastName);
    },
  }
});

var People = [
  { firstName : "Loring", lastName : "Dodge", image : "images/carolinewong.jpg" },
  { firstName : "Mike", lastName : "Hart", image : "images/alexzai.jpg" },
  { firstName : "Jimmy", lastName : "Gong", image : "images/jimmygong.jpg" },
];
