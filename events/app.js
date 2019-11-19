const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Reister a listener
logger.on('messageLogged', () => {
  console.log('hola');
});
// Register an event

logger.on('message');
