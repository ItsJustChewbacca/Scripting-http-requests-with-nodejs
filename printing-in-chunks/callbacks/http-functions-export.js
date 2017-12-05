var https = require("https");

//name: getHTML
// cb is arbitrary; it cant lowercase uppercase reverse
module.exports = function getHTML(options, callback) {
  https.get(options, function(response) {
    response.setEncoding("utf8");
    let rawData = "";
    response.on("data", chunk => {
      callback(chunk);
    });
    response.on("end", () => {
      console.log(rawData);
    });
  });
};
