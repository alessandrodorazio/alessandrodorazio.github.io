const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/src/pages/404.js"))),
  "component---src-pages-curriculum-js": hot(preferDefault(require("/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/src/pages/curriculum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/src/pages/index.js"))),
  "component---src-pages-menu-js": hot(preferDefault(require("/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/src/pages/menu.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/src/pages/skills.js")))
}

