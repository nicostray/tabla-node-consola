const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
require('colors');
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(tabla => console.log(tabla ,'creado con éxito'.green))
    .catch(err => console.error(err))
