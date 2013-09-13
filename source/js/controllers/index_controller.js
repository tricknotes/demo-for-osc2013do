Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('model.lines').addObject(Account.OrderLine.create());
    }
  }
});
