Package.describe({
    name: 'my-package',
});

Package.onUse(function (api) {
    api.use([
        'vulcan:core',
        'vulcan:forms',
        'vulcan:accounts',
    ]);

    api.addFiles('lib/stylesheets/bootstrap.min.css', 'client');
    api.mainModule('lib/server/main.js', 'server');
    api.mainModule('lib/client/main.js', 'client');
});