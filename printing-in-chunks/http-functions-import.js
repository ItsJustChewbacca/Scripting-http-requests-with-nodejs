var getHTML = require("./http-functions-export");

var mypara = {
  host: "sytantris.github.io",
  path: "/http-examples/step5.html"
};

function PrintHTML(html) {
  console.log(html);
}

getHTML(mypara, PrintHTML);
