# babel-preset-latest-minimal

Babel preset including only needed ES2015+ plugins using feature detection.

## Install

```bash
$ npm install --save-dev babel-preset-latest-minimal
```

## Usage

Add preset to your `.babelrc` file:

```json
{
  "presets": ["latest-minimal"]
}
```

## Motivation

When using the fantastic [Babel](http://babeljs.io/) transpiler in building web applications with the latest and greatest ECMAScript features, it is advisable and safer to include all plugins from [`babel-preset-latest`](https://github.com/babel/babel/tree/master/packages/babel-preset-latest) due to the fact that the runtime environment (the browser) is unknown at build-time. Anyway, when developing a Node.JS or an Electron application, the environment is controlled and Babel plugins could be hand-picked to transpile only the features not supported.

Most of the presets I came across before developing this one relay basically on the node version and enable an arbitrary set of plugins. Deciding what to enable based on the version of node is like the old user-agent sniffing technique we all learned to avoid in favor of **feature detection**.

So, long story short, the solution was to took all official plugins in Babel's `babel-preset-latest` and enable only those needed because the environment is not supporting a specific feature. In addition, this approach allows the developer to change the version of node/electron and this plugin will update the plugins list accordingly. Nothing is hadrcoded, no magic, no arbitrary decisions!

## Contribute

Are plugins missing? Is there any issue with the feature detection? Let me know by sending a PR or filing an issue!

## License

WTFPL
