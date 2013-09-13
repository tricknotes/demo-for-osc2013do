Account.SheetRoute = Ember.Route.extend({
  model: function(params) {
    return Account.Sheet.sheets[params.id - 0];
  },

  afterModel: function(model) {
    if (!model) {
      this.transitionTo('not_found');
    }
  }
});
