import {createToolbar} from '@/components/toolbar/toolbar.template';
import {$} from '@/core/dom';
import {ExcelStateComponent} from '@/core/ExcelStateComponent';
import {defaultStyles} from '@/constants';

export class Toolbar extends ExcelStateComponent {
  static className = 'excel__toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      subscribe: ['currentStyle'],
      ...options
    });
  }

  prepare() {
    this.initState(defaultStyles);
  }

  storeChanged(changes) {
    this.setState(changes.currentStyle);
  }

  toHTML() {
    return this.template;
  }

  get template() {
    return createToolbar(this.state);
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value);
      this.$emit('toolbar:applyStyle', value);

      const key = Object.keys(value)[0];
      this.setState({[key]: value[key]});
    }
  }
}
