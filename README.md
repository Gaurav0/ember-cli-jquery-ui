# Ember-cli-jquery-ui

A simple addon to add jquery-ui as a dependency to your app.

## Installation

* `npm install --save-dev ember-cli-jquery-ui`
* `ember g ember-cli-jquery-ui`

## Example Application

An example application demonstrating how to use ember-cli-jquery-ui is available at
http://github.com/gaurav0/ember-cli-jquery-ui-example

## Included Components

At the moment, ember-cli-jquery-ui includes a single example component, `jqui-button`,
which can be used in your application like this:

`{{#jqui-button icon="ui-icon-gear" action="buttonClicked" disabled=disabledProperty}}Button Text{{/jqui-button}}`

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
