# Narwin Pack

A collection of PostCSS plugins [DockYard](https://dockyard.com) uses in our projects.

## Installation
```shell
$npm install --save-dev narwin-pack
```

Example for an Ember app, add the following into `ember-cli-build.js`:
```shell
$npm install --save-dev ember-cli-postcss
```

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('narwin-pack'),
            options: {
              // Add your custom plugin options here
            }
          }
        ]
      }
    }
  });

  return app.toTree();
};
```


## Using plugins
- [postcss-partial-import](https://github.com/jonathantneal/postcss-partial-import),
- [postcss-nested](https://github.com/postcss/postcss-nested),
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties),
- [postcss-inline-svg](https://github.com/TrySound/postcss-inline-svg),
- [postcss-svgo](https://github.com/ben-eb/postcss-svgo),
- [autoprefixer](https://github.com/postcss/autoprefixer),
- [postcss-hexrgba](https://github.com/seaneking/postcss-hexrgba)
- [postcss-discard-comments](https://github.com/ben-eb/postcss-discard-comments)

## Legal

[DockYard](http://dockyard.com), Inc &copy; 2017

[@dockyard](http://twitter.com/dockyard)

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
