# [angular-gulp-boilerplate](https://github.com/jakt/angular-gulp-boilerplate)

An opinionated kickstarter for [AngularJS](http://angularjs.org) projects. Heavily inspired by Josh Miller's [ngBoilerplate](http://joshdmiller.github.com/ng-boilerplate) but modified to use `gulp` istead of `grunt`.



***

## Quick Start

Install Node.js and then:

```sh
$ git clone https://github.com/jakt/angular-gulp-boilerplate.git . 
$ npm install
$ bower install
$ gulp
```

Finally, open `localhost:8080/` in your browser.


## Purpose

`angular-gulp-boilerplate` is designed to make life easy by providing a basic framework
with which to kickstart AngularJS projects. It contains a best-practice
directory structure to ensure code reusability and maximum scalability.
ngBoilerplate also comes prepackaged with the most popular design frameworks
around: [Twitter Bootstrap](http://getbootstrap.com),
[Angular UI](http://angular-ui.github.io),
[Angular Bootstrap](http://angular-ui.github.io/bootstrap),
[Font Awesome](http://fortawesome.github.com/Font-Awesome), and
[SASS](http://sass-lang.com). Lastly, it contains a sophisticated
[Gulp](http://gulpjs.org)-based build system to ensure maximum productivity.
All you have to do is clone it and start coding!


### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
angular-gulp-boilerplate/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- sass/
  |  |  |- main.scss
  |- vendor/
  |  |- angular/
  |  |- jquery/
  |  |- bootstrap/
  |  |- lodash/
  |  |- ..and more/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- gulpfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

What follows is a brief description of each entry, but most directories contain
their own `README.md` file with additional documentation, so browse around to
learn more.

- `karma/` - test configuration.
- `src/` - our application sources. [Read more &raquo;](src/README.md)
- `vendor/` - third-party libraries. [Bower](http://bower.io) will install
  packages here. Anything added to this directory will need to be manually added
  to `build.config.js` and `karma/karma-unit.js` to be picked up by the build
  system.
- `.bowerrc` - the Bower configuration file. This tells Bower to install
  components into the `vendor/` directory.
- `bower.json` - this is our project configuration for Bower and it contains the
  list of Bower dependencies we need.
- `build.config.js` - our customizable build settings; see "The Build System"
  below.
- `gulpfile.js` - our build script
- `module.prefix` and `module.suffix` - our compiled application script is
  wrapped in these, which by default are used to place the application inside a
  self-executing anonymous function to ensure no clashes with other libraries.
- `package.json` - metadata about the app, used by NPM and our build script. Our
  NPM dependencies are listed here.


### Boilerplate TODO's

* add html5 mode/connect-history-api-fallback to gulp
* add built in auth service
* add commonly used utility service 
