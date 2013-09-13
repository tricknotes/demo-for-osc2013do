Account.Sheet = Ember.Object.extend({
  lines:     [],
  createdAt: null,

  total: function() {
    return this.get('lines.@each.subtotal').reduce(function(total, subtotal) {
      return total + subtotal || 0;
    }, 0);
  }.property('lines.@each.subtotal')
});
