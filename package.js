Package.describe({
  summary: "Share login among separate domains.",
  version: "0.0.1",
  name: "stolinski:shared-auth"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.use('spacebars');
  api.use('blaze-html-templates');
  api.use('kadira:blaze-layout');
  api.add_files([
    'lib/sharedAuthFrame.html',
    'lib/sharedAuthFrame.js',
    'lib/emptyLayout.html',
    'lib/requestAuth.js'
  ], 'client');
});
