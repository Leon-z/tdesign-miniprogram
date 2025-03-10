/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdTagProps } from './type';
const props: TdTagProps = {
  /** 标签是否可关闭 */
  closable: {
    type: Boolean,
    value: false,
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 组件类名，用于设置 组件外层元素元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 标签中的图标，可自定义图标呈现 */
  icon: {
    type: String,
  },
  /** 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 */
  maxWidth: {
    type: null,
  },
  /** 标签类型，有三种：方形、圆角方形、标记型 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 标签尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 组件风格，用于描述组件不同的应用场景 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 标签风格变体 */
  variant: {
    type: String,
    value: 'dark',
  },
};

export default props;
