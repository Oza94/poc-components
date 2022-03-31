// inject component CSS files imports
export default function injectCss() {
  return {
    renderChunk(code, chunk) {
      if (!chunk.facadeModuleId || !chunk.facadeModuleId.endsWith(".tsx")) {
        return null;
      }

      const match = code.match(
        /import [_a-z0-9]+ from '\.\/[a-zA-Z]+\.css\.js';/
      );

      if (match) {
        const cssMatch = match[0].match(/\.\/[a-zA-Z]+\.css/);
        return code.replace(match[0], `${match[0]}\nimport '${cssMatch[0]}';`);
      }

      const matchRequire = code.match(
        /var [_a-z0-9]+ = require\('\.\/[a-zA-Z]+\.css\.js\)';/
      );

      if (matchRequire) {
        const cssMatch = matchRequire[0].match(/\.\/[a-zA-Z]+\.css/);
        return code.replace(
          matchRequire[0],
          `${matchRequire[0]}\require '${cssMatch[0]}';`
        );
      }

      return null;
    },
  };
}
