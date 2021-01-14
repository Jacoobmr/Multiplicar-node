//requireds
// const fs = require('fs');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`el archivo tabla-${ base }.txt ha sido creado`);
// });


// console.log(argv.base);