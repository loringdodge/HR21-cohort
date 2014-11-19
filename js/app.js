App = Ember.Application.create();

App.Router.map(function() {
  this.route("profile", { path: "/profile/:profile_id" });
});


App.IndexRoute = Ember.Route.extend({
  model: function() {
  	return $.getJSON("http://localhost:8888/HR21-cohort/server/response.json").then(function(response) {
      var array = [];
      for(var id in response.profile){
        array.push(response.profile[id])
      }
      return array;
    });
  },

});

App.ProfileRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
          people: $.getJSON("http://localhost:8888/HR21-cohort/server/response.json").then(function(response) {
                    return response.profile[params.profile_id];
                  }),
          github: $.getJSON("https://api.github.com/users/loringdodge").then(function(response) {
                    var person = [];
                    person.push(response.company);

                    return person;
                  }),
    })
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
  { id: "123", firstName : "Loring", lastName : "Dodge", image : "images/carolinewong.jp", bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " },
  { id: "124", firstName : "Mike", lastName : "Hart", image : "images/alexzai.jp", bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " },
  { id: "125", firstName : "Jimmy", lastName : "Gong", image : "images/jimmygong.jp", bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " },
];

var Loring = {
    "123" : {
      firstName : "Loring",
      lastName : "Dodge",
      image : "images/alexzai.jpg",
      bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
    }
}
