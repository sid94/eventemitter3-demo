let EventEmitter = require('eventemitter3');

let EE = new EventEmitter()
let i = 0
setInterval(function () {
        EE.emit('stream', 'input ' + i.toString())
        i++
}, 1000);

module.exports = EE;