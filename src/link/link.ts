import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-link`;

@wxComponent()
export default class Link extends SuperComponent {
  externalClasses = [];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  observers = {
    'theme, status, size, underline, navigatorProps'() {
      this.setClass();
    },

    prefixIcon(prefixIcon) {
      const obj = setIcon('prefixIcon', prefixIcon, '');
      this.setData({
        ...obj,
      });
    },

    suffixIcon(suffixIcon) {
      const obj = setIcon('suffixIcon', suffixIcon, '');
      this.setData({
        ...obj,
      });
    },
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  methods = {
    setClass() {
      const { theme, status, size, underline, navigatorProps } = this.properties;
      const classList = [name, `${name}--${status}-${theme}`, `${name}--${size}`];
      if (underline) {
        classList.push(`${name}--underline`);
      }
      if ((navigatorProps && !navigatorProps.url) || status === 'disabled') {
        classList.push(`${name}--disabled`);
      }

      this.setData({
        className: classList.join(' '),
      });
    },

    onSuccess(e) {
      this.triggerEvent('success', e);
    },

    onFail(e) {
      this.triggerEvent('fail', e);
    },

    onComplete(e) {
      this.triggerEvent('complete', e);
    },
  };
}
