Account.Router.map(function() {
  this.resource('sheet', {path: '/sheet/:id'});
  this.resource('sheets', function() {
    this.route('new');
  });
  this.resource('not_found', {path: '/*any'});
});
