const app = require("./app");
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();

// console.log(appEnv);
// start server on the specified port and binding host
app.listen(appEnv.port, "0.0.0.0", function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
