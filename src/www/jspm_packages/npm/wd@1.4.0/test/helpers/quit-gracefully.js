/* */ 
(function(process) {
  "use strict";
  process.on('SIGINT', function() {
    process.exit();
  });
})(require('process'));
