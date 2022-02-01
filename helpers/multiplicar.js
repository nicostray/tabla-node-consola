const fs = require('fs');
let colors = require('colors');

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {

    let salida, consola = '';

    for(let i = 1;i<=hasta;i++){
    salida += (`   ${base} x ${i} = ${base*i} \n`);
    consola += (`   ${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`);
    }
    
    if(listar===true) {
        console.log('================='.green);
        console.log('   tabla del'.green, `${base}`);
        console.log('================='.green);
        console.log(consola);
    }

    fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida);

    resolve(`tabla del ${base}`);
}) 
}

module.exports = {
    crearArchivo
}