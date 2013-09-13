Account.OrderLine = Ember.Object.extend({
  productName: null,
  unitPrice:   0,
  count:       0,

  total: function() {
    return this.get('unitPrice') * this.get('count');
  }.property('unitPrice', 'count')
});
