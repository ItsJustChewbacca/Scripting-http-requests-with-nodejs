var getHTML = require("./http-functions-export");

var mypara = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};

function printUpperCase(html) {
  var upperCase = html.toUpperCase();
  console.log(upperCase);
}

getHTML(mypara, printUpperCase);
