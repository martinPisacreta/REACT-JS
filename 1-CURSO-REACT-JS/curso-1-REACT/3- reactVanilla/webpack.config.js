const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

//__dirname es la ruta principal de todos los archivos
//HtmlWebpackPlugin -> procesa archivos html dentro de webpack
//plugins -> funcionan a la hora de procesar y generar una salida
//loaders ->  funcionan a la hora de importar en desarrollo


//plugins
    const HtmlPlugin = new HtmlWebpackPlugin({ 
        template : __dirname + "/index.html", //entra al archivo index.html que esta al mismo nivel que package.json
        filename : "index1.html", //y genero uno igual en la carpeta dist,con el nombre que yo desee
        inject : "body" //y agrego al final del body , los bundles
    })
//hasta aca

module.exports = {
    entry: path.resolve(__dirname, "src/app.js"), //archivo principal de mi aplicacion
    output : { //genero un archivo de salida en base a el "entry"
        path: path.resolve(__dirname, "dist"),//El archivo se crea dentro de la carpeta dist     
        filename : "bundle.js" //el nombre del archivo va a ser bundle.js 
    },
    module : {
        //loaders
            rules : [
                {
                    test : /\.js$/, //con esto voy a poder importar  archivos js
                    use : "babel-loader", //con esto webpack va a entender los archivos js
                    exclude : /node_modules/
                },
                {
                    test: /\.css$/, //con esto voy a poder importar  archivos css
                    use: ["style-loader", "css-loader"] //con esto webpack va a entender los archivos css
                }
            ]
        //hasta aca
    },
    mode : "development", //puede ser development o produccion
    plugins : [HtmlPlugin] //cargo un componente mas a la hora de module.exports, que hace referencia a HtmlPlugin de arriba
}