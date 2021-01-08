const { argv } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);

        break;
    case 'listar':
        let registros = porHacer.getListado();

        for (let tarea of registros) {
            console.log('========= Por Hacer ========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('============================='.green);
        }


        break;
    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);

        break;

    case 'borrar':

        let borrar = porHacer.borrar(argv.descripcion);

        console.log(borrar);

        break;

    default:
        console.log('comando no es reconocido');
        break;
}