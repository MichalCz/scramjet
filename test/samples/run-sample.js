#!/usr/bin/env node

const path = require('path');
const nodeunit = require('../lib/reporter');
const stream = require(path.resolve(process.cwd(), process.argv[2]));

nodeunit.run(process.argv[2], {
    stream: stream.test
}, null, (err) => {
    if (err) {
        console.error(err);
        process.exit(127);
    }
});
