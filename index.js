/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => ({
  postcssPlugin: "postcss-short-var",

  Declaration(decl) {
    if (!decl || !decl.value.includes("--")) return;

    decl.value = decl.value.split(" ").map((v) => {
      if (v.match(/var(.*)/) || !v.match(/--.+/)) return v;
      return v.replace(/(--[0-9-_\p{L}\p{Emoji_Presentation}]+)/ug, "var($1)");
    }).join(" ");
  },
});

module.exports.postcss = true;
