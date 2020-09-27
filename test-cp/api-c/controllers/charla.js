const { conferencias } = require('../mocks/conferencia');

const assignCharla = (charla, conferencia) =>{
  conferencia.charlas.push(charla);
  conferencia.duracion_actual += charla.duration;
}

const findConferenceDayAvailable = (charla) => {
  return conferencias.findIndex(
    (conferencia) => conferencia.duracion_actual + charla.duration <= conferencia.duracion_total);
}

const findConferenceLessLoad = () => {
  const orderConference = conferencias.sort(function (a, b) {
    return (a.duracion_actual - a.duracion_total) - (b.duracion_actual - b.duracion_total);
  });
  return orderConference[0];
}

const saveConference = (charla) => {
  const index = findConferenceDayAvailable(charla);
  if (index >= 0) {
    assignCharla(charla, conferencias[index]);
  } else {
    const conferenciaWhereToSave = findConferenceLessLoad();
    assignCharla(charla, conferenciaWhereToSave);
  }
  return conferencias;
}

module.exports = {
  saveConference
}
