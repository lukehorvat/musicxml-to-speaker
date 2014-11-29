#!/usr/bin/env node

"use strict";

var musicXmlToSpeaker = require("./");
var pkg = require("./package.json");
var args = process.argv.slice(2);
var xmlFile = args[0];

if (args.indexOf("--help") !== -1 || !xmlFile) {
  console.log([
    "",
    pkg.name + " - " + pkg.description,
    "",
    "Usage:",
    "",
    "  " + pkg.name + " <xml>"
  ].join("\n"));
  return;
}

if (args.indexOf("--version") !== -1) {
  console.log(pkg.version);
  return;
}

musicXmlToSpeaker.play(xmlFile).on("finish", function() {
  console.log("Successfully played " + xmlFile + "!");
});
