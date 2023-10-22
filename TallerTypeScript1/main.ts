import { series } from "./series.js";

export const serie1 = new series(1, "Modern Family", "Star+", 10);
export const serie2 = new series(2, "Stranger Things", "Netflix", 4);
export const serie3 = new series(3, "Gossip Girl", "HBO", 10);
export const serie4 = new series(4, "Gilmore Girls", "Netflix", 10);
export const serie5 = new series(5, "Ginny and Georgia", "Netflix", 10);

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(serie1, serie2, serie3, serie4, serie5);

function mostrarDatosSerie(
  serie1: series,
  serie2: series,
  serie3: series,
  serie4: series,
  serie5: series
): void {
  let tbodyAprendiz = document.createElement("tbody");
  tbodyAprendiz.innerHTML = ` <tr><td>Id</td> <td>Nombre</td> <td>Channel</td> <td>Seasons</td></tr>
    <tr><td>${serie1.id}</td> <td>${serie1.name}</td> <td>${serie1.channel}</td> <td>${serie1.seasons}</td></tr>
    <tr><td>${serie2.id}</td> <td>${serie2.name}</td> <td>${serie2.channel}</td> <td>${serie2.seasons}</td></tr>
    <tr><td>${serie3.id}</td> <td>${serie3.name}</td> <td>${serie3.channel}</td> <td>${serie3.seasons}</td></tr>
    <tr><td>${serie4.id}</td> <td>${serie4.name}</td> <td>${serie4.channel}</td> <td>${serie4.seasons}</td></tr>
    <tr><td>${serie5.id}</td> <td>${serie5.name}</td> <td>${serie5.channel}</td> <td>${serie5.seasons}</td></tr>
    `;
  seriesTable.appendChild(tbodyAprendiz);
}
