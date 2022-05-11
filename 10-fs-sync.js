const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs')
const third = fs.readFileSync('./contents/subfolder/text.txt', 'utf8')
console.log(third);
const first = readFileSync('./contents/first.txt','utf8');
const second = readFileSync('./contents/second.txt', 'utf8');
console.log(first, second);

writeFileSync(
    './contents/result-sync.txt',
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'}
)