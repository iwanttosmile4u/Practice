const gulp = require("gulp"),
  concat = require("gulp-concat"),
  clean = require("gulp-clean"),
  imagemin = require("gulp-imagemin");

const paths = {
  src: {
    css: "./src/css/*.css",
    js: "./src/js/*.js",
    img: "./src/img/*.jpg",
  },
  build: {
    css: "./build/css",
    js: "./build/js",
    self: "./build/",
    img: "./build/img",
  },
};

const buildJS = () =>
  gulp
    .src(paths.src.js)
    .pipe(concat("script.js"))
    .pipe(gulp.dest(paths.build.js));

const buildCSS = () =>
  gulp
    .src(paths.src.css)
    .pipe(concat("style.css"))
    .pipe(gulp.dest(paths.build.css));

const cleanBuild = () =>
  gulp.src(paths.build.self, { allowEmpty: true }).pipe(clean());

const removeImg = () =>
  gulp.src(paths.src.img).pipe(imagemin()).pipe(gulp.dest(paths.build.img));

gulp.task("buildCSS", buildCSS);
gulp.task("buildJS", buildJS);
gulp.task("clean", cleanBuild);
gulp.task("removeIMG", removeImg);

gulp.task("default", gulp.series(cleanBuild, buildCSS, buildJS));
