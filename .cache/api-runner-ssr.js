var plugins = [{
      plugin: require('/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","exclude":[],"query":"\n        {\n          site {\n            siteMetadata {\n              siteUrl\n            }\n          }\n\n          allSitePage {\n            edges {\n              node {\n                path\n              }\n            }\n          }\n      }"},
    },{
      plugin: require('/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Alessandro D'Orazio","short_name":"alessandrodorazio","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/icon.png"},
    },{
      plugin: require('/Users/alessandrodorazio/Documents/Lavoro/Progetti/alessandrodorazio.github.io/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-91923299-1","head":true,"anonymize":true,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0,"sampleRate":5,"siteSpeedSampleRate":10},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
