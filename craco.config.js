const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@link-color': '#cd18ff', // link color
              '@success-color': '#18bfdd', // success state color
              '@warning-color': '#faad14', // warning state color
              '@error-color': '#dd8589', // error state color
              '@font-size-base': '14px', // major text font size
              '@heading-color': 'rgba(255,0,0,0.85)', // heading text color
              '@text-color': 'rgb(128,148,37)', // major text color
              '@text-color-secondary': 'rgba(167,31,31,0.45)', // secondary text color
              '@disabled-color': 'rgb(20,56,190)', // disable state color
              '@border-radius-base': '2px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)' // major shadow for layers
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
