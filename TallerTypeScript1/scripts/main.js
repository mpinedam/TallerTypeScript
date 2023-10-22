import { listaseries } from "./data.js";
var seriesTable = document.getElementById("serie");
mostrarDatosSerie(listaseries);
function mostrarDatosSerie(allseries) {
    var tbodyAprendiz = document.createElement("tbody");
    allseries.forEach(function (serie) {
        tbodyAprendiz.innerHTML = "<tr><td>".concat(serie.id, "</td> <td>").concat(serie.name, "</td> <td>").concat(serie.channel, "</td> <td>").concat(serie.seasons, "</td></tr>");
    });
    seriesTable.appendChild(tbodyAprendiz);
}
