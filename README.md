# postcss-short-var

A tiny [PostCSS] plugin to make CSS custom properties less verbose. Are you tired of writing `var(--foo)`, when most languages allow a simple `foo` to reference variables? This plugin will allow you to simply write `--foo` to save you those precious microseconds of your time. Contributions appreciated.

## Usage

[PostCSS]: https://github.com/postcss/postcss

You write...
```css
:root {
  --red: #f00;
}

.foo {
  color: --red;
}

.bar {
  --blur: 5px;
  --white: 255 255 255;
  box-shadow: 0 0 --blur rgb(--white);
}
```
... and your browser will render ...
```css
:root {
  --red: #f00;
}

.foo {
  color: var(--red);
}

.bar {
  --blur: 5px;
  --white: 255 255 255;
  box-shadow: 0 0 var(--blur) rgb(var(--white));
}
```

## Installation

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-short-var
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-short-var'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
