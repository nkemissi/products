// On importe un plugin Webpack qui permet de générer automatiquement 
// un fichier HTML incluant nos fichiers JavaScript
const HtmlWebpackPlugin = require('html-webpack-plugin');
// On exporte la configuration de Webpack
module.exports = {
  // On définit le mode 'development' qui permet d'avoir un code plus lisible
  // et plus facile à déboguer (contrairement au mode 'production' qui optimise le code)
  mode: 'development',
  // Configuration du serveur de développement
  devServer: {
    // Le serveur sera accessible sur le port 8081 
    // (exemple: http://localhost:8081)
    port: 8080,
  },
  // Liste des plugins que Webpack va utiliser
  plugins: [
    // On configure le plugin HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // Il va utiliser le fichier ./public/index.html comme modèle
      // et y injecter automatiquement les scripts JavaScript générés
      template: './public/index.html',
    }),
  ],
};