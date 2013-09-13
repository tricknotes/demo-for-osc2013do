Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('lines').addObject(Account.OrderLine.create());
    },

    deleteLine: function(orderLine) {
       this.get('lines').removeObject(orderLine);
    }
  }
});
