Account.SheetRoute = Ember.Route.extend({
  afterModel: function(model) {
    if (!model) {
      this.transitionTo('not_found');
    }
  }
});
