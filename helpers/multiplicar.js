const fileSystem = require( 'fs' );
const colors = require( 'colors' );
/**
 * 
 * @param {*} base Es numero de multiplicacion 
 */
const crearArchivo = async ( base, listar, hasta = 10 ) => {


    let salida = ''
    for ( let i = 1; i <= hasta; i++ ) {
        salida += ( `${base} X ${i} = ${base * i}\n` );
    }
    if ( listar ) {
        console.log( '====================='.gray );
        console.log( '     Tabla del ' + colors.blue( base ) );
        console.log( '====================='.gray );
        console.log( salida );
    }

    try {
        fileSystem.writeFileSync( `./salida/tabla-${base}.txt`, salida );
        return `tabla-${base} `

    } catch ( error ) {
        throw error;
    }


}


module.exports = { crearArchivo: crearArchivo }
