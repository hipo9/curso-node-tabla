const { crearArchivo } = require( './helpers/multiplicar' );
const argv = require( './config/yargs' );
const color = require( 'colors' );


crearArchivo( argv.b, argv.l, argv.ha )
    .then( nombreArch => console.log( nombreArch.green, 'creadp' ) )
    .catch( error => console.log( error + ''.red ) )





/****************
 * FORMA MANUAL *
 ****************/
//console.clear();
////argumentos aque vienen de la consola
//console.log( process.argv );
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split( '=' );
//console.log( base );

//
//
////let base;
//crearArchivo( base )
//    .then( nombreArch => console.log( nombreArch, 'creadp' ) )
//    .catch( error => console.log( error + '####F' ) )



