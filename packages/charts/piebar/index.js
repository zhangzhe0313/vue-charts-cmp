import PieBar from './src';

PieBar.install = function (Vue) {
  Vue.use(PieBar.name, PieBar);
};

export default PieBar;