const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends {
    log(message){
        console.log(message);

        this.emit('messageLogged', {id: 1, url:''});
    }
}

module.exports = Logger;