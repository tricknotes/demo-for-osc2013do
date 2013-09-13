Account.IndexController = Ember.ObjectController.extend({
  actions: {
    addOrderLine: function() {
      this.get('model.lines').addObject(Account.OrderLine.create());
    },

    deleteLine: function(orderLine) {
       this.get('model.lines').removeObject(orderLine);
    }
  }
});
