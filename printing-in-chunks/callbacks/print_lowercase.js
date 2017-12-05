var getHTML = require("./http-functions-export");

var mypara = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/lowercase.html"
};

function printLowerCase(html) {
  var lowerCase = html.toLowerCase();
  console.log(lowerCase);
}

getHTML(mypara, printLowerCase);
