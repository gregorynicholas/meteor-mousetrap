
Package.describe({
  summary: "mousetrap.js package for meteor"
});

Package.on_use(function (api) {
  api.add_files('mousetrap.js', 'client');

  /**
    * since the code attaches to the window object,
    * skip exporting the variable
    */
  // api.export("Mousetrap", "client");
});
