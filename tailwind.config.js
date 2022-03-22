module.exports = {
  //Con esto, montamos nuestra aplicacion desde index.html luego monta ./scr/**/*.{js,jsx} eliminamos todos los estilos de nuestra aplicación que no son ocupados
  purge: ["index.html", "./src/**/*.{,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
