Account.IndexRoute = Ember.Route.extend({
  model: function() {
    var line = Account.OrderLine.create({
      productName: 'ほむほむ'
    });

    return Account.Sheet.create({
      lines: [line]
    });
  }
});
