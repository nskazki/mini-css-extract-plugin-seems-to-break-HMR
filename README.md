# Issue

HMR partially ignores changes applied to Vue@2 components when MiniCssExtractPlugin is used along with the ICSS option.

If you turn off the `icss` option of `css-loader`, replace `mini-css-extract-plugin` with `style-loader`, or upgrade to `vue-loader@16` from `vue-loader@15` along with upgrading to `vue@3` from `vue@2`, HMR will start reflecting all changes.

### Actual Behavior

1. HMR won't apply changes made to the template or script section of a root Vue component as long as `mini-css-extract-plugin` is used along with the ICSS option. However, changes applied to the style section will always be reflected.
2. HMR won't apply changes applied to existing lines of text, tags, and components of a child Vue components. However, new lines, tags, and components as well as removed ones will be reflected. Changes to the script and style sections will always be reflected.

### Expected Behavior

Changes should be reflected despite their nature.

# How to Reproduce

1. Clone the minimal reproducible example `git clone https://github.com/nskazki/mini-css-extract-plugin-seems-to-break-HMR`.
1. Run `npm start` and open the demo in a browser. If the port is available, the address will be http://localhost:8080/.
2. Apply a few changes to the `src/RootComponent.vue`. Changes applied to the templates or script sections won't be reflected. Changes applied to the style section will be reflected.
3. Apply a few changes to the `src/ChildComponent.vue`. Changes applied to the template section will be partially reflected. Changes appllied to the script and templates will be fully reflected.
4. Comment out the `modules: { mode: 'icss' }` from the `webpack.config.js` and restart the dev server.
5. Try applying changes again, they should be reflected despite their nature.
6. Bring back the `icss` option but replace the `externalCSS` with `internalCSS`, so that CSS is included into the JS bundle, and restart the dev server.
7. Try applying changes again, they should be reflected despite their nature.

# Versions

1. `webpack@5.69.0`
2. `webpack-dev-server@4.7.4`
2. `css-loader@6.6.0`
3. `mini-css-extract-plugin@2.5.3`
4. `vue-loader@15.9.8`

# About ICSS

https://github.com/webpack-contrib/css-loader#mode
