module.exports = function getHTML(options, callback) {
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
};
