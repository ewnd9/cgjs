const { Gtk } = require('cgjs/gi');
console.log(Gtk);

Gtk.init(null);

const aboutdialog = new Gtk.AboutDialog();
aboutdialog.set_title('Dialog');
aboutdialog.run();
