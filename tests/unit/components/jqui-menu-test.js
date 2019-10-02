import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('jqui-menu', function(hooks) {
  setupTest(hooks);

  test('it renders', function(assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.owner.factoryFor('component:jqui-menu').create();
    assert.equal(component._state, 'preRender');

    // renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');
  });
});
