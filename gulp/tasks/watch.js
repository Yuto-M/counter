const util = require("util");
const DefaultRegistry = require("undertaker-registry");
const gulp = require("gulp");

function MyRegistry() {
  DefaultRegistry.call(this);
  this.set("watch", done => {
    console.log("watch");
    /**
     * NOTE: distをwatchして変更があったらreloadを実行しようと思っていたが、
     * gulpはwatchするタイミングでファイルがないとwatch対象から外れてしまい、reload処理が実施されない。
     * @see https://github.com/sindresorhus/gulp-ruby-sass/issues/11
     * @see https://qiita.com/yuichiroharai/items/3eb9aef9dea7b5eb5090
     * なのでファイルをビルドしたらreloadさせる形に変更した。
     * @see https://teratail.com/questions/168814
     */

    gulp.watch(`./src/ts/**`, gulp.series("script", 'reload'));
    done();
  });
}

util.inherits(MyRegistry, DefaultRegistry);

module.exports = new MyRegistry();
