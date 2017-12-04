// option is the parameter; it is arbitrary;
// function name : getAndPrintHTML
// Input type : object
// output : console.log is a side-effect; so the return undefined .
function getAndPrintHTML(options) {
  var https = require("https");

  https.get(options, function(response) {
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

var mypara = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

getAndPrintHTML(mypara);
