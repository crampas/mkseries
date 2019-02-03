#!/usr/bin/env node

const fs = require('fs');
var glob = require("glob")

var program = require('commander');
const { transformFilename } = require('./filename-utils');


program
    .usage('[options] <path ...>')
    .description('renames files to a sequence name like <scene>.<index>.png')
    .option('--scene <name>', 'name prefix of scene')
    .option('--force', 'rename files - do not simulate')
    .arguments('<path>')
    .parse(process.argv);

var pathList = program.args;
if (!pathList.length) {
    pathList = ['*'];
}

const scene = program.scene || 'scene';

pathList.forEach(path => {
    var items = glob.sync(path).sort();
    for (var i = 0; i < items.length; i++) {
        const file = items[i];
        const newFile = transformFilename(file, scene, i + 1);
        console.log(`${file} --> ${newFile}`);
        if (program.force) {
            fs.renameSync(file, newFile);
        }
    }
});
