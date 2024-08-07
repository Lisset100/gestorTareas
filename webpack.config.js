
const path = require('path');

module.exports = {
  mode: 'development',// Para saber si está en desarrollo o producción.
  entry: './src/index.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'main.bundle.js',// Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'),// Carpeta de salida, en dist se va guardar el bundle
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Regex para identificar archivos CSS
        use: ['style-loader', 'css-loader'], // Loaders para procesar archivos CSS
      },
      {
        test: /\.js$/, // Regex para identificar archivos JavaScript
        exclude: /node_modules/, // Excluir archivos de node_modules
        use: {
          loader: 'babel-loader', // Loader para transpilar JavaScript, convierte js moderno al js compatible con más navegadores
          options: {
            presets: ['@babel/preset-env'], // Presets de Babel
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map', // Genera un mapa de origen para depuración
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')// Carpeta base para el servidor de desarrollo
    },

    compress: true, // Habilita la compresión gzip
    port: 9000, // Puerto del servidor de desarrollo
  }
};
//Expresiones regulares buscan en un conjunto de carateres en un bloque si tiene esos signos