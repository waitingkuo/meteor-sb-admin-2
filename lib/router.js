// Dashboard
FlowRouter.route('/', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'dashboard'});
  },
});

// Charts
FlowRouter.route('/flot', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'flot'});
  },
});
FlowRouter.route('/morris', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'morris'});
  },
});

// Tables
FlowRouter.route('/tables', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'tables'});
  },
});

// UI Elements
FlowRouter.route('/panels-wells', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'panels-wells'});
  },
});
FlowRouter.route('/buttons', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'buttons'});
  },
});
FlowRouter.route('/notifications', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'notifications'});
  },
});
FlowRouter.route('/typography', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'typography'});
  },
});
FlowRouter.route('/icons', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'icons'});
  },
});
FlowRouter.route('/grid', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'grid'});
  },
});

// Sample Pages
FlowRouter.route('/blank', {
  action(params, queryParams) {
    BlazeLayout.render('layout', {main: 'blank'});
  },
});
FlowRouter.route('/login', {
  action(params, queryParams) {
    BlazeLayout.render('layout2', {main: 'login'});
  },
});
