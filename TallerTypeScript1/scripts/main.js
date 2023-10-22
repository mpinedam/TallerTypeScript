import { series } from "./series.js";
export var serie1 = new series(1, "Modern Family", "Star+", 10);
export var serie2 = new series(2, "Stranger Things", "Netflix", 4);
export var serie3 = new series(3, "Gossip Girl", "HBO", 10);
export var serie4 = new series(4, "Gilmore Girls", "Netflix", 10);
export var serie5 = new series(5, "Ginny and Georgia", "Netflix", 10);
var seriesTable = document.getElementById("serie");
mostrarDatosSerie(serie1, serie2, serie3, serie4, serie5);
function mostrarDatosSerie(serie1, serie2, serie3, serie4, serie5) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = " <tr><td>Id</td> <td>Nombre</td> <td>Channel</td> <td>Seasons</td></tr>\n    <tr><td>".concat(serie1.id, "</td> <td>").concat(serie1.name, "</td> <td>").concat(serie1.channel, "</td> <td>").concat(serie1.seasons, "</td></tr>\n    <tr><td>").concat(serie2.id, "</td> <td>").concat(serie2.name, "</td> <td>").concat(serie2.channel, "</td> <td>").concat(serie2.seasons, "</td></tr>\n    <tr><td>").concat(serie3.id, "</td> <td>").concat(serie3.name, "</td> <td>").concat(serie3.channel, "</td> <td>").concat(serie3.seasons, "</td></tr>\n    <tr><td>").concat(serie4.id, "</td> <td>").concat(serie4.name, "</td> <td>").concat(serie4.channel, "</td> <td>").concat(serie4.seasons, "</td></tr>\n    <tr><td>").concat(serie5.id, "</td> <td>").concat(serie5.name, "</td> <td>").concat(serie5.channel, "</td> <td>").concat(serie5.seasons, "</td></tr>\n    ");
    seriesTable.appendChild(tbodyAprendiz);
}
