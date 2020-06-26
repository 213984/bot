var express = require("express"),
  app = express();
var server = app.listen(4000, () => {
  global.port = server.address().port;
});
app.use(express.static("public")),
  app.get("/", function(e, s) {
    s.sendFile(__dirname + "/index.html");
  });