import { htmlToFigma } from "@builder.io/html-to-figma";

const layers = htmlToFigma();
var json = JSON.stringify(layers);
var blob = new Blob([json], {
  type: "application/json"
});

const link = document.createElement("a");
link.setAttribute("href", URL.createObjectURL(blob));
link.setAttribute("download", "page.builder.json");
document.body.appendChild(link); // Required for FF

link.click();
document.body.removeChild(link);
