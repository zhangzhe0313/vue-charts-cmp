import VccComponents from './components';

const install = function (Vue) {
  if (install.installed) {
    return;
  }

  Object.values(VccComponents).forEach(comp => {
    Vue.component(comp.name, comp);
  })

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
}

export default {
  install,
  VccComponents
};