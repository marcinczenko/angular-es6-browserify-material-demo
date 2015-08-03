# angular-es6-browserify-material-demo

This is a light startup project for angular, ES6, browserify, and [angular-material]. You can use it to quickly start playing with angular front-end with material design framework from Google. It also documents using ES6-to-ES5 ([babel] transpiler), [browserify], and [ng-annotate] \(via [browserify-ngannotate]).

If you do not care about [angular-material] and just want to have basic angular support, I created even lighter project [angular-es6-browserify-demo]. 

## Installing

In order to install run

    npm install

## Building

I use [browserify] in this project to create a single `js` bundle that then will be loaded by the client. `gulp` is used to orchiestrate the whole bundling process. To build, simply run:

    gulp

This will run the `default` gulp task, which first runs `gulp sass` to compile `scss` files into plain `css`. Then it runs `gulp build`. If you do not change anything in your `scss` files, you can just directly run `gulp build`.

`gulp build` will create a `dist` folder where it puts two files: `index.js` and `index.js.map`. As you see this is a debug version. I use [exorcist] to separate the source map files from the actual javascript bundle.

You can use `gulp watch` to have your javascript being continuously observed and rebuilt each time a change happens.

## Running

Just for the sake of experimenting I am using [koa] as the server.

To begin serving, just run:

    npm start


## ToDo

- use [gulp-load-plugins] to clean up the `gulpfile`,
- add support for unit and end-2-end tests,
- add [gulp-autoprefixer] to the `sass` gulp task.

[babel]: https://www.npmjs.com/package/babel
[ng-annotate]: https://github.com/olov/ng-annotate
[browserify-ngannotate]: https://www.npmjs.com/package/browserify-ngannotate
[angular-material]: https://www.npmjs.com/package/angular-material
[browserify]: https://www.npmjs.com/package/browserify
[exorcist]: https://www.npmjs.com/package/exorcist
[koa]: http://koajs.com
[gulp-autoprefixer]: https://www.npmjs.com/package/gulp-autoprefixer
[gulp-load-plugins]: https://www.npmjs.com/package/gulp-load-plugins

[angular-es6-browserify-demo]: https://github.com/mczenko/angular-es6-browserify-demo
