# Ember-cli-jquery-ui

A simple addon to add jquery-ui as a dependency to your app. Also includes a small library of components wrapping JQuery UI widgets.

## Installation

* `npm install --save-dev ember-cli-jquery-ui`
* `ember g ember-cli-jquery-ui`

## Change your jquery-ui theme

By default, your application will run with the base theme. If you would like to select another jquery-ui standard theme,
you may do so by editing your Brocfile.js like this:

    var EmberApp = require('ember-cli/lib/broccoli/ember-app');

    var app = new EmberApp({
        'ember-cli-jquery-ui': {
            'theme': 'ui-darkness'
        }
    });
 
The list of available standard themes (with JQuery UI 1.11.1):

* base
* black-tie
* blitzer
* cupertino
* dark-hive
* dot-luv
* eggplant
* excite-bike
* flick
* hot-sneaks
* humanity
* le-frog
* mint-choc
* overcast
* pepper-grinder
* redmond
* smoothness
* south-street
* start
* sunny
* swanky-purse
* trontastic
* ui-darkness
* ui-lightness
* vader

## Example Application

An example application demonstrating how to use ember-cli-jquery-ui is available at
http://github.com/gaurav0/ember-cli-jquery-ui-example

## Included Components

At the moment, ember-cli-jquery-ui includes a three example components:

1. `jqui-button`, which can be used in your application like this:

   `{{#jqui-button icon="ui-icon-gear" action="buttonClicked" disabled=disabledProperty}}Button Text{{/jqui-button}}`

2. `jqui-datepicker`, which can be used in your application like this:

   `{{jqui-datepicker value=myDate yearRange="2013:2015"}} {{myDate}}`

3. `jqui-progress-bar`, which can be used in your application like this:

   `{{jqui-progress-bar value=37 max=100}}`

I would appreciate contributions of additional components wrapping jquery-ui widgets.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
