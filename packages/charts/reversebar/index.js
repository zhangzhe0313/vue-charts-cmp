import ReverseBar from './src';

ReverseBar.install = function (Vue) {
  Vue.use(ReverseBar.name, ReverseBar);
};

export default ReverseBar;