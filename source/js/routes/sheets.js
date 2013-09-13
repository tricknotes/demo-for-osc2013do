Account.SheetsRoute = Ember.Route.extend({
  model: function() {
    var now = new Date();

    return [
      Account.Sheet.create({
        createdAt: now
      }),
      Account.Sheet.create({
        createdAt: new Date(now - 1 * 1000 * 60)
      })
    ];
  }
});
