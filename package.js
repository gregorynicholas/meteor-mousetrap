
Package.describe({
  summary: "mousetrap.js package for meteor"
});

Package.on_use(function (api) {
  api.add_files('mousetrap.js', 'client');

  api.export("Mousetrap", "client");
});
