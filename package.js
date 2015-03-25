Package.describe({
  name: 'chompomonim:autoform-picker',
  summary: 'Collection document picker with document creation possibility.',
  version: '0.2.0',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('coffeescript');
  api.use('aldeed:template-extension@3.4.3');
  api.use('aldeed:autoform@5.0.0');
  api.addFiles([
    'autoform-picker.html',
    'autoform-picker.coffee'
    ], 'client');
  api.addFiles([
    'searchIn.coffee',
    ], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chompomonim:autoform-picker');
  api.addFiles('autoform-picker-tests.js');
});