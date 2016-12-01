var assign  = require('object-assign');
var postcss = require('postcss');

var processors = [
  {
    plugin: require('postcss-partial-import'),
    namespace: 'import',
    defaults: {}
  },
  {
    plugin: require('postcss-nested'),
    namespace: 'nested',
    defaults: {}
  },
  {
    plugin: require('postcss-custom-properties'),
    namespace: 'properties',
    defaults: {}
  },
  {
    plugin: require('postcss-svg-fragments'),
    namespace: 'fragments',
    defaults: {}
  },
  {
    plugin: require('autoprefixer'),
    defaults: { browsers: ['last 2 versions']}
  },
  {
    plugin: require('postcss-hexrgba'),
    namespace: 'rgba-colors',
    defaults: {}
  }
];

module.exports = postcss.plugin('narwin-pack', function (opts) {
  opts = assign({}, opts);

  var instance = postcss();

  processors.forEach(function (processor) {
    var namespaceOptions = processor.namespace in opts ? opts[processor.namespace] : opts;
    var processorOptions = {};

    processorOptions = assign({}, processor.defaults, namespaceOptions);

    if (namespaceOptions && !processorOptions.disable) {
      instance.use(processor.plugin(processorOptions));
    }
  });

  return instance;
});
