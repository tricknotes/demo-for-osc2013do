Account.NotFoundRoute = Ember.Route.extend({
  afterModel: function() {
    this.transitionTo('index');
  }
});
