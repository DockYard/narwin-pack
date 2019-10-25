var assign  = require('object-assign');
var postcss = require('postcss');

var processors = [
  {
    plugin: require('postcss-import'),
    namespace: 'import',
    defaults: {}
  },
  {
    plugin: require('postcss-nested'),
    namespace: 'nested',
    defaults: {}
  },
  {
    plugin: require('postcss-inline-svg'),
    namespace: 'inline-svg',
    defaults: {}
  },
  {
    plugin: require('autoprefixer'),
    namespace: 'autoprefixer',
    defaults: { browsers: ['last 2 versions']}
  },
  {
    plugin: require('postcss-discard-comments'),
    namespace: 'discard-comments',
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
