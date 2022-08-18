import VerticalBar from './src';

VerticalBar.install = function (Vue) {
  Vue.use(VerticalBar.name, VerticalBar);
}

export default VerticalBar;