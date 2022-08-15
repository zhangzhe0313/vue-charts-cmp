import BasicLineBar from './src';

BasicLineBar.install = function (Vue) {
  Vue.use(BasicLineBar.name, BasicLineBar)
}

export default BasicLineBar;