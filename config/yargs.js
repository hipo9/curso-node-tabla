const argv = require( 'yargs' )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tab. de multiplicar'
    } )
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla creada en consola'

    } )
    .option( 'ha', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'rango del num. multiplicador '
    } )
    .check( ( argv, options ) => {
        if ( isNaN( argv.b ) ) {
            throw 'La base tiene que ser un numero'
        } else {
            return true;
        }
    } ).argv


module.exports = argv;