#!/usr/bin/env node

'use strict';

var ArgumentParser = require('argparse').ArgumentParser;
var path = require('path');

var pkg = require(path.join(__dirname, 'package.json'));

var parser = new ArgumentParser({
	addHelp: true,
	description: pkg.description,
	version: pkg.version
});

parser.addArgument(['-o'], {
	help: 'Output file, defaults to <filename>.deduped.html of first input file'
});

parser.addArgument(['file'], {
	help: 'File to deduplicate bookmarks in.'
});

var args = parser.parseArgs();

var BookmarkDedupe = require('./index.js');

function makeOutFilename(inFile) {
	var inFilePath = path.parse(inFile);
	inFilePath.ext += ".deduped.html";
	inFilePath.base = null;
	return path.format(inFilePath);
}

var outFile = args.o || makeOutFilename(args.file);
var b = new BookmarkDedupe(args.file, outFile);

b.save(b.dedupe());