# Ember-cli-jquery-ui

A simple addon to add jquery-ui as a dependency to your app. Also includes a small library of components wrapping JQuery UI widgets.

## Example Application

An example application demonstrating how to use ember-cli-jquery-ui is available at
http://github.com/gaurav0/ember-cli-jquery-ui-example

You can see the example application online at
http://ember-cli-jquery-ui-example.herokuapp.com/

## Installation

* `ember install:addon ember-cli-jquery-ui`

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

If you'd prefer not to include any of the above jquery-ui themes, you can set
the theme to 'none'. *Warning:* Components do not work correctly without styling.

## Included Components

At the moment, ember-cli-jquery-ui includes nine of the eleven jquery ui widgets wrapped in components:

1. `jqui-accordion`, which can be used in your application like this:

        {{#jqui-accordion}}
        <h3>Section </h3>
        <div>
            <p>
                Mauris mauris ante, ...
            </p>
        </div>
        <h3>Section 2</h3>
        <div>
            <p>
                Sed non urna. ...
            </p>
        </div>
        ...
        {{/jqui-accordion}}

2. `jqui-autocomplete`, which can be used in your application like this:

        {{jqui-autocomplete value=text source=languages}} {{text}}

3. `jqui-button`, which can be used in your application like this:

        {{#jqui-button icon="ui-icon-gear" action="buttonClicked" disabled=disabledProperty}}Button Text{{/jqui-button}}

4. `jqui-datepicker`, which can be used in your application like this:

        {{jqui-datepicker value=myDate yearRange="2013:2015"}} {{myDate}}
        
5. `jqui-menu`, which can be used in your application like this:

        {{#jqui-menu}}
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3
                <ul>
                    <li>Item 3-1</li>
                    <li>Item 3-2</li>
                </ul>
            </li>
            <li>Item 4</li>
            <li>-</li> {{!-- divider --}}
            <li>Item 5</li>
        {{/jqui-menu}}

6. `jqui-progress-bar`, which can be used in your application like this:

        {{jqui-progress-bar value=37 max=100}}

7. `jqui-slider`, which can be used in your application like this:

        {{jqui-slider value=num min=0 max=100 step=10 slide="slideAction"}} {{num}}

8. `jqui-spinner`, which can be used in your application like this:

        {{jqui-spinner value=num min=100 max=2000 step=100}} {{num}}
        
9. `jqui-tabs`, which can be used in your application like this:

        {{#jqui-tabs}}
            <ul>
                <li><a href="#tabs-1">Nunc tincidunt</a></li>
                <li><a href="#tabs-2">Proin dolor</a></li>
                <li><a href="#tabs-3">Aenean lacinia</a></li>
            </ul>
            <div id="tabs-1">
                <p>Proin elit arcu, ....</p>
            </div>
            <div id="tabs-2">
                <p>Morbi tincidunt, ...</p>
            </div>
            <div id="tabs-3">
                <p>Mauris eleifend ....</p>
                <p>Duis cursus. ...</p>
            </div>
        {{/jqui-tabs}}

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
