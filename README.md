# musicxml-to-speaker [![NPM version](http://img.shields.io/npm/v/musicxml-to-speaker.svg?style=flat-square)](https://www.npmjs.org/package/musicxml-to-speaker)

Output MusicXML to the speakers.

## Installation

Install the package with NPM:

```bash
$ npm install -g musicxml-to-speaker
```

The `-g` flag is recommended for easy CLI usage, but completely optional.

## Usage

Run it via the CLI:

```bash
$ musicxml-to-speaker song.xml
```

Or, programmatically interact with its API:

```javascript
var musicXmlToSpeaker = require("musicxml-to-speaker");

var stream = musicXmlToSpeaker.play("song.xml");

// It's a Node.js stream, mate.
stream.on("finish", function() { console.log("Done!"); });
```

## Related

This package is mostly just a thin wrapper around [musicxml-to-pcm](https://github.com/lukehorvat/musicxml-to-pcm) and [node-speaker](https://github.com/TooTallNate/node-speaker).

If speakers simply aren't your thing, then perhaps try [musicxml-to-mp3](https://github.com/lukehorvat/musicxml-to-mp3) or [musicxml-to-wav](https://github.com/lukehorvat/musicxml-to-wav).
