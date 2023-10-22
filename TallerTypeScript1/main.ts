import { series } from "./series.js";

import { listaseries } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(listaseries);

function mostrarDatosSerie(allseries: series[]): void {
  
  allseries.forEach((serie) => {
    let tbodyAprendiz = document.createElement("tr");
    tbodyAprendiz.innerHTML = `<tr><td>${serie.id}</td> <td>${serie.name}</td> <td>${serie.channel}</td> <td>${serie.seasons}</td> </tr>`;
    seriesTable.appendChild(tbodyAprendiz);
  }) ;

}
