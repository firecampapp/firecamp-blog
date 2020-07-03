  
// Load static fonts
require('@openfonts/rajdhani_latin');

console.log("Font initialized")

exports.onInitialClientRender = require('@narative/gatsby-theme-novela/src/gatsby/browser/onInitialClientRender');
exports.onRouteUpdate = require('@narative/gatsby-theme-novela/src/gatsby/browser/onRouteUpdate');
exports.shouldUpdateScroll = require('@narative/gatsby-theme-novela/src/gatsby/browser/shouldUpdateScroll');