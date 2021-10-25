const path = require('path')

module.exports = {
    entry: './src/index.js', //inicio del proyecto
    //watch: true, //no hace falta volver a compilar , compila solo al guardar
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') //ruta fisica donde esta alojado el archivo al momento de ejecutar , por ejemplo -> C:\Users\Martin\Desktop\webpack-example\dist, una vez ahi , resuelve lo que esta ahi adentro
      },
    output: {
    path: path.resolve(__dirname, 'dist'), //en la ruta donde este la carpeta dist .... (sigue abajo)
    filename: 'bundle.js' //cambio el nombre main.js por bundle.js , veo el cambio con npm run build
    }
}