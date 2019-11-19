const filesystem = require('fs');
const ops = require('./fileops');

filesystem.readFile('./resources/number.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const list = data.split('\n');
  const incValue = ops.incrementValues(list);  
  filesystem.writeFile('./resources/numbernew.txt', incValue.join('\n'), (err) => {
    if (err) {
      throw err;
    }
  });
});

filesystem.read('./resources/name.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  const namesList = data.split('\n');
  console.log(ops.callNames(namesList).join('\n'));
});