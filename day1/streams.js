const fs = require('fs');

const readStream = fs.createReadStream('./docs/file1.txt',{encoding:'utf-8'});
// // readStream.on('data',(chunks)=>{
// //     console.log(chunks);
// // });
const writeStream = fs.createWriteStream('./docs/file2.txt');
// writeStream.write('HI i am newwwwwwwwwwwww');

//using pipe

readStream.pipe(writeStream);