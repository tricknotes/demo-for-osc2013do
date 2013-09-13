Account.SheetsRoute = Ember.Route.extend({
  model: function() {
    var now = new Date();

    return [
      Ember.Object.create({
        createdAt: now
      }),
      Ember.Object.create({
        createdAt: new Date(now - 1 * 1000 * 60)
      })
    ];
  }
});
