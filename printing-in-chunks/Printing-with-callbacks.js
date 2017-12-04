function getHTML(options, callback) {
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
function PrintHTML(html) {
  console.log(html);
}

var mypara = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

getHTML(mypara, PrintHTML);
