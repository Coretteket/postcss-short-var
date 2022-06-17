/**
 * @type {import('postcss').PluginCreator}
 */
 module.exports = () => {
  // Work with options here

  return {
    postcssPlugin: 'postcss-short-vars',

    Declaration (decl) {
      if (!decl || !decl.value.includes('--')) return;

      const arr = decl.value.split(' ').map((v) => {
        if (v.match(/var(.*)/)) return v;
        if (v.match(/--.+/)) return v.replace(/(--.+)/g, 'var($1)').replace(',)', '),');
        return v;
      });

      decl.value = arr.join(' ');
    }
  }
}

module.exports.postcss = true
