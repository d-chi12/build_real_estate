const { environment } = require('@rails/webpacker')

const webpack = repuire('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
      $: 'jquery/src/jquery',
      jQuery: 'jquery/src/jquery',
      Popper: ['popper.js', 'default']
  }) 
)

module.exports = environment
