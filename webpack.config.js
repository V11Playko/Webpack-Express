/** @type {import('webpack').Configuration} */

var nodeExternals = require('webpack-node-externals');

{
target: 'node';
externals: [nodeExternals()]
}

const path = require('path');
// path: la ubicacion del proyecto

module.exports = {
    //module.export: la info de nuestra configuracion webpack
    name: 'express-server',
    //name: nombre del proyecto
    entry: './src/index.js',
    // entry: punto de entrada de nuestra aplicacion
    target: 'node',
    output: {
        //output: donde guardamos el recurso que fue modularizado por webpack
        path: path.resolve(__dirname, 'dist'),
        //path: ubicacion del guardado
        //__dirname: donde esta el proyecto en el Sistema Operativo
        // 'dist'(distribution): nombre del folder, si no existe entonces creara dist
        filename: 'index.js',
        //filename: como llamar a la aplicacion cuando se prepare para produccion
    },
    externals: {
        express: "require(\"express\")"
    },
    resolve: {
        // extensions: con que extensiones trabajaremos
        extensions: ['.js']
    },
    module: {
        rules: [
            //rules: reglas con las que trabajaremos en el proyecto
            // se asigna a cada loader(optimizador), con que tipo de archivo trabajara y con que reglas
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
