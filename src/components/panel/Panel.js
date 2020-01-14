import NestedComponent from '../_classes/nested/NestedComponent';

export default class PanelComponent extends NestedComponent {
  static schema(...extend) {
    return NestedComponent.schema({
      label: 'Panel',
      type: 'panel',
      key: 'panel',
      title: 'Panel',
      theme: 'default',
      breadcrumb: 'default',
      components: [],
      clearOnHide: false,
      input: false,
      tableView: false,
      persistent: false
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Panel',
      icon: 'list-alt',
      group: 'layout',
      documentation: 'http://help.form.io/userguide/#panels',
      weight: 30,
      schema: PanelComponent.schema()
    };
  }

  get defaultSchema() {
    return PanelComponent.schema();
  }

  get templateName() {
    return 'panel';
  }

  get collapsed() {
    return super.collapsed;
  }

  set collapsed(value) {
    super.collapsed = value;
    const accordionButton = this.element && this.element.querySelector('.usa-accordion__button');
    accordionButton && accordionButton.focus();
  }

  constructor(...args) {
    super(...args);
    this.noField = true;
  }
}
