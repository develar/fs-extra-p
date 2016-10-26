const BluebirdPromise = require("bluebird/js/release/promise")()
BluebirdPromise.config({
  longStackTraces: true,
  cancellation: true
})
module.exports = BluebirdPromise