var fs = require("fs");
var path = require("path");

console.log("Generating country-list.js ...");

var dataFile = path.join(__dirname, "../node_modules/i18n-iso-countries/langs/de.json");
var outDir = path.join(__dirname, "../generated");
var outFile = path.join(outDir, "country-list.js");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

var data = JSON.parse(fs.readFileSync(dataFile).toString());
var countries = Object.keys(data.countries);
var code = "module.exports = " + JSON.stringify(countries) + ";";

fs.writeFileSync(outFile, code);
