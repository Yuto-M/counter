const util = require("util");
const DefaultRegistry = require("undertaker-registry");
const browserSync = require("browser-sync");
const bs = browserSync.create();

function MyRegistry() {
  DefaultRegistry.call(this);

  // serveタスク
  this.set("serve", function(done) {
    console.log("serve");
    bs.init({
      port: 3011,
      open: false,
      server: {
        baseDir: "dist"
      },
      startPath: "/",
      ghostMode: false,
    });
    done();
  });

  // reloadタスク
  this.set("reload", done => {
    console.log('reload');
    bs.reload();
    done();
  });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
