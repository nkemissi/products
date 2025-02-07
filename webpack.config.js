// On importe un plugin Webpack qui permet de générer automatiquement
// un fichier HTML incluant nos fichiers JavaScript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// On exporte la configuration de Webpack
module.exports = {
  // On définit le mode 'development' qui permet d'avoir un code plus lisible
  // et plus facile à déboguer (contrairement au mode 'production' qui optimise le code)
  mode: "development",
  // Configuration du serveur de développement
  devServer: {
    // Le serveur sera accessible sur le port 8081
    // (exemple: http://localhost:8081)
    port: 8081,
  },
  // Liste des plugins que Webpack va utiliser
  plugins: [
    new ModuleFederationPlugin({
      name: "products", // nom unique du remote
      filename: "remoteEntry.js", // point d'entrée pour l'intégration
      exposes: {
        "./ProductsIndex": "./src/index", // expose le composant
      },
      shared: ["faker"],
    }),
    // On configure le plugin HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // Il va utiliser le fichier ./public/index.html comme modèle
      // et y injecter automatiquement les scripts JavaScript générés
      template: "./public/index.html",
    }),
  ],
};
