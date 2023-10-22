import {series} from "./series.js"

export const serie1 = new series(1, "Modern Family", "BBC", 10)

let seriesTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(serie1);

function mostrarDatosSerie(serie1: series):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = ` <tr>
    <th scope="col">#</th>
    <th scope="col">Id</th>
    <th scope="col">Nombre</th>
    <th scope="col">Channel</th>
    <th scope="col">Seasons</th>
  </tr>

  <tr>
    <th scope="row">1</th>
    <td>${serie1.id}</td>
    <td>${serie1.name}</td>
    <td>${serie1.channel}</td>
    <td>${serie1.seasons}</td>
  </tr>
    `
    seriesTable.appendChild(tbodyAprendiz);
}

