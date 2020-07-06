import axios from 'axios';

export const getDataFromApi = (url) => {
    return axios.get(url)
        .then(({ data }) => {
            return data;
        });
};

var nombre = 'Sacha'
var apellido = 'Lifszyc'

    function pasarAMayusculas(nombre) {
      return nombre.toUpperCase()
    }

    pasarAMayusculas(nombre + ' ' + apellido)
    pasarAMayusculas('Lucía')
    pasarAMayusculas('')