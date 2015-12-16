Package.describe({
  summary: "Share login among separate domains.",
  version: "0.1.1",
  name: "stolinski:shared-auth",
  prodOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use(['spacebars', 'blaze-html-templates']);
  api.use(['kadira:blaze-layout@2.3.0']);
  api.use(['kadira:flow-router@2.10.0']);
  api.add_files([
    'lib/sharedAuthFrame.html',
    'lib/sharedAuthFrame.js',
    'lib/emptyLayout.html',
    'lib/requestAuth.js'
  ], 'client');
});
