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
    defaults: {
      warnings: false
    }
  },
  {
    plugin: require('postcss-inline-svg'),
    namespace: 'inline-svg',
    defaults: {}
  },
  {
    plugin: require('postcss-svgo'),
    namespace: 'svgo',
    defaults: {
      plugins: [
        { cleanupNumericValues: false },
        { cleanupAttrs: false },
        { removeHiddenElems: false },
        { cleanupEnableBackground: false },
        { convertStyleToAttrs: false },
        { convertPathData: false },
        { convertTransform: false },
        { removeUnknownsAndDefaults: false },
        { removeNonInheritableGroupAttrs: false },
        { removeUselessStrokeAndFill: false },
        { removeUnusedNS: false },
        { cleanupIDs: false },
        { cleanupListOfValues: false },
        { moveElemsAttrsToGroup: false },
        { moveGroupAttrsToElems: false },
        { collapseGroups: false },
        { removeRasterImages: false },
        { convertShapeToPath: false },
        { sortAttrs: false },
        { removeDimensions: false }
      ]
    }
  },
  {
    plugin: require('autoprefixer'),
    namespace: 'autoprefixer',
    defaults: { browsers: ['last 2 versions']}
  },
  {
    plugin: require('postcss-hexrgba'),
    namespace: 'rgba-colors',
    defaults: {}
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
