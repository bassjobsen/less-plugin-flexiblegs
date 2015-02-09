less-plugin-flexiblegs
========================

Imports Flexible Grid System ([flexible.gs](http://flexible.gs/)) Less code before your custom Less code.

## lessc usage

Install..

Requires Less v2.4.0

```
npm install -g less-plugin-flexiblegs
```

and then on the command line,

```
lessc file.less --flexiblegs
```


## Programmatic usage

```
var LessPluginFlexiblegs = require('less-plugin-flexiblegs'),
    FlexiblegsPlugin = new LessPluginFlexiblegs();
less.render(lessString, { plugins: [FlexiblegsPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
