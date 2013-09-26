Account.SheetsNewRoute = Ember.Route.extend({
  model: function() {
    return Account.Sheet.create({
      lines: [
        Account.OrderLine.create(),
        Account.OrderLine.create()
      ]
    });
  }
});
