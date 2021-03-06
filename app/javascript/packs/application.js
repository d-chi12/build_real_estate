// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require jquery
//= require jquery_ujs
//= require jquery3
//= require popper
//= require bootstrap
//= require_tree

require("@rails/ujs").start()
require("./includes/properties");


require("bootstrap")
require ("@fortawesome/fontawesome")
require ("@fortawesome/fontawesome-free-solid")
require ("@fortawesome/fontawesome-free-regular")
require ("@fortawesome/fontawesome-free-brands")
var jQuery = require("jquery")
global.$ = global.jQuery = jQuery
window.$ = window.jQuery = jQuery

import toastr from 'toastr';
toastr.options = {
  progressBar: true
}
global.toastr = toastr;

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
