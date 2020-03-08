const gulp = require("gulp");
const clean = require("./gulp/tasks/clean.js");
const script = require("./gulp/tasks/script.js");
const serve = require("./gulp/tasks/serve.js");
const watch = require("./gulp/tasks/watch.js");

gulp.registry(clean);
gulp.registry(script);
gulp.registry(serve);
gulp.registry(watch);

// 開発用タスク
gulp.task(
  "default",
  gulp.series(
    "clean",
    "script",
    gulp.parallel("serve", "watch")
  )
);

// productionビルドタスク
gulp.task(
  "build",
  gulp.series("clean", "script")
);
