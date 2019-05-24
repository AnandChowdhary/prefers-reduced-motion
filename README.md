# 🙅 Prefers reduced motion

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/prefers-reduced-motion.svg)](https://travis-ci.org/AnandChowdhary/prefers-reduced-motion)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/prefers-reduced-motion/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/prefers-reduced-motion?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/prefers-reduced-motion.svg)](https://github.com/AnandChowdhary/prefers-reduced-motion/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/prefers-reduced-motion.svg)
![NPM type definitions](https://img.shields.io/npm/types/prefers-reduced-motion.svg)
[![NPM](https://img.shields.io/npm/v/prefers-reduced-motion.svg)](https://www.npmjs.com/package/prefers-reduced-motion)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/prefers-reduced-motion.svg)](https://www.npmjs.com/package/prefers-reduced-motion)

[![NPM](https://nodei.co/npm/prefers-reduced-motion.png)](https://www.npmjs.com/package/prefers-reduced-motion)

Prefers reduced motion is a package that tells you whether a user prefers reduced motion. It's based on the CSS `@media (prefers-reduced-motion)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install prefers-reduced-motion
```

Import the package:

```js
import prefersReducedMotion from "prefers-reduced-motion";
```

Then call the function:

```js
const motionPreference = prefersReducedMotion();
// Returns "reduce" or "no-preference"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (prefers-reduced-motion)`, so it just returns `"no-preference"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=prefers-reduced-motion)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const motionPreference = prefersReducedMotion(false);
// Returns "reduce", "no-preference", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT
