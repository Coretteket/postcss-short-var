/**
 * @type {import('postcss').PluginCreator}
 */
 module.exports = (opts = {}) => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-short-vars',

    Declaration (decl, postcss) {
      if (!decl || !decl.value.includes('--')) return;

      const arr = decl.value.split(' ').map((v) => {
        if (v.match(/var(.*)/)) return v;
        if (v.match(/--.+/)) return `var(${v})`;
        return v;
      });

      decl.value = arr.join(' ');
    }
  }
}

module.exports.postcss = true
