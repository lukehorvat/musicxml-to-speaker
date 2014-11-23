"use strict";

var fs = require("fs");
var Speaker = require("speaker");
var xml2pcm = require("musicxml-to-pcm");

module.exports.play = function(file) {
  var bitsPerSample = 16; // A 16-bit integer will represent each sample.
  var samplesPerSecond = 44100;

  return xml2pcm
  .newStream(fs.readFileSync(file, "utf8"), bitsPerSample, samplesPerSecond)
  .pipe(new Speaker({ channels: 1, bitDepth: bitsPerSample, sampleRate: samplesPerSecond }));
};
