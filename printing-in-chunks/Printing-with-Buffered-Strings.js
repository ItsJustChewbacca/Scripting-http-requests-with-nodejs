function getAndPrintHTML() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };
  var https = require("https");
  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");
    let rawData = "";
    response.on("data", chunk => {
      rawData += chunk;
    });
    response.on("end", () => {
      console.log(rawData);
    });
  });
}
getAndPrintHTML();
