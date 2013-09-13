Account.SheetRoute = Ember.Route.extend({
  model: function(params) {
    return Account.Sheet.sheets[params.id - 0];
  }
});
