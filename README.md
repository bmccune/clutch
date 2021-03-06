# [Clutch](http://getclutch.com) 
[![browser support](https://ci.testling.com/bmccune/clutch.png)](https://ci.testling.com/bmccune/clutch) 

[![Build Status](https://travis-ci.org/bmccune/clutch.png?branch=master)](https://travis-ci.org/bmccune/clutch)
[![devDependency Status](https://david-dm.org/bmccune/clutch.png)](https://david-dm.org/bmccune/clutch#info=devDependencies)

To get started, check out [http://getclutch.com](http://getclutch.com)!

## Documentation

Clutch's documentation, included in this repo in the root directory, and publicly hosted at [http://getclutch.com](http://getclutch.com). The docs may also be run locally.

### Running documentation locally


## Compiling CSS and JavaScript

Clutch uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. From the root `/clutch` directory, install the [necessary local dependencies](package.json) via `npm install`.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Tests - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.



## Authors

**Brian McCune**

+ [http://twitter.com/brian_mccune](http://twitter.com/brian_mccune)
+ [http://github.com/bmccune](http://github.com/bmccune)

## Copyright and license

Copyright 2013 McCune Interactive, Inc under [the Apache 2.0 license](LICENSE).