const fs = require('fs'); // require the file system module to work with it

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); //setting up the data stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* readStream.on('data', (chunk) => { //listening to a data event
  console.log('------------- NEW CHUNK ---------------');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
})  */

//piping
readStream.pipe(writeStream);