module.exports = {
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      // chunks: ['echarts', 'vcharts', 'vendors']
    }
  },
  // configureWebpack:{
  //   externals: {
  //      'vue': 'Vue'
  //   }
  // },
  // configureWebpack: config => {
  //   return {
  //     optimization: {
  //       splitChunks: {
  //         chunks: 'async',
  //         minSize: 10000,
  //         minChunks: 1,
  //         cacheGroups: {
  //           commonCmp: {
  //             name: `chunk-commonCmp`,
  //             minChunks: 2,
  //             priority: -20, 
  //             chunks: 'initial'
  //           }
  //         }
  //       }
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.module
        .rule('js')
        .include
          .add('/packages')
          .end()
        .use('babel')
          .loader('babel-loader') 
          .tap(options => {
            // 修改它的选项...
            return options
          });

          config.output.filename('./js/[name].[chunkhash:8].js');
          config.output.chunkFilename('./js/[name].[chunkhash:8].js');

    //  config.optimization.splitChunks({
    //     chunks: 'all',
    //     cacheGroups: {
    //         vue: {
    //           name: 'vue',
    //           priority: -10, 
    //           test: /[\\/]node_modules[\\/]vue[\\/]/ // in order to adapt to cnpm
    //         },
    //         echarts: {
    //           name: 'echarts',
    //           priority: -10, 
    //           test: /[\\/]node_modules[\\/]echarts[\\/]/ // in order to adapt to cnpm
    //         }
    //     }
    //  })     
  },
  productionSourceMap: false
};
