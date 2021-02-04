//  запуск: gulp watch

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    uglify      = require('gulp-uglifyjs'),/* сжатие js */
    buffer      = require('vinyl-buffer'),/* преобразование потока vinil потоку*/
    eslint = require('gulp-eslint'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    babelify =  require('babelify'); // npm i --save-dev babelify



// npm i gulp --save-dev
// npm i gulp-babel babel-core babel-preset-es2015 babel-preset-env  --save-dev

//npm i --global babel-cli
//sudo npm i -g  browserify // разрешения и включения всех зависимостей , реализации CommonJ  для require() в браузере
//npm i --save-dev react
//npm i --save-dev react-dom
//npm i --save-dev babel-preset-react // предоставляет Babel поддержку для JSX
//npm i --save-dev babel-preset-es2015
//npm i --save-dev vinyl-source-stream // конвертирует .bundle() в текстовый поток
//npm i gulp-uglifyjs --save-dev
//npm i --save-dev vinyl-buffer

//npm i gulp-eslint --save-dev
//npm i eslint eslint-plugin-react eslint-plugin-babel babel-eslint
//npm i --save-dev babel-plugin-transform-class-properties // ES7 поддержка синтаксиса

gulp.task('taskBabel', function() {
    gulp.src(['lessons_book/jsxJS/*.jsx','lessons_book/jsxJS/*/*.jsx'])
        .pipe(babel({
            presets: ['react','es2015'],
            plugins:["transform-class-properties"]
        })) /*JSX => ReactDOM */
        // .pipe(babel({ plugins:["transform-class-properties"] }))
       // .pipe(babel({ presets: 'es2015'}))/* es2015 ,env */
        .pipe(gulp.dest('lessons_book/JS'));
});

gulp.task('eslint', function() {
    gulp.src(['lessons_book/jsxJS/*/*.js'])
        .pipe(eslint({
            "parser": "babel-eslint",
            "plugins": [
                "babel",
                "react"
            ]
        }))
        .pipe(eslint.format());
});

gulp.task('browserify',['taskBabel','eslint'], function() {
    return browserify({
        entries:'./lessons_book/JS/forModules21/21.js',
        debug: true,
        extensions: ['.js']
    })
        .transform(babelify)
         //.transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', err => {
            gutil.log("Browserify Error", gutil.colors.red(err.message))
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())/* преобразование потока */
        .pipe(uglify()) /* сжимаем минифицируем */
        //.pipe(sourcemaps.init({loadMaps: true}))
        //.pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./lessons_book/JS/forModules21'));
});


/* gulp отслеживает изменения заданных файлов и преминяет к ним таски
При запуске этого таска он начинает отслеживать
[] это второй параметр означает запустить эти таски до него */
gulp.task('watch',function () {
    //gulp.watch("src/js/*.js",gulp.parallel('default'));
    gulp.watch(["lessons_book/jsxJS/*.jsx",'lessons_book/jsxJS/*/*.jsx'],['browserify']);
});

gulp.task('default', ['browserify', 'watch']);

// в ручном режиме
//babel --presets react,es2015 --plugins transform-class-properties lessons_book/jsxJS/forModules21 -d lessons_book/JS/forModules21
//browserify lessons_book/JS/forModules21/21.js  -o lessons_book/JS/forModules21/bundle.js -d


