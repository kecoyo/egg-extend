# @kecoyo/egg-extend

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-extend.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-extend
[travis-image]: https://img.shields.io/travis/kecoyo/egg-extend.svg?style=flat-square
[travis-url]: https://travis-ci.org/kecoyo/egg-extend
[codecov-image]: https://img.shields.io/codecov/c/github/kecoyo/egg-extend.svg?style=flat-square
[codecov-url]: https://codecov.io/github/kecoyo/egg-extend?branch=master
[david-image]: https://img.shields.io/david/kecoyo/egg-extend.svg?style=flat-square
[david-url]: https://david-dm.org/kecoyo/egg-extend
[snyk-image]: https://snyk.io/test/npm/egg-extend/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-extend
[download-image]: https://img.shields.io/npm/dm/egg-extend.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-extend

<!--
Description here.
-->

## Install

```bash
$ npm i @kecoyo/egg-extend --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.extend = {
  enable: true,
  package: "@kecoyo/egg-extend",
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.extend = {};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/kecoyo/egg-extend/issues).

## License

[MIT](LICENSE)
