
const importar = function (marca){
    marca= marca.toLowerCase().replace(/\s/g, "");
    switch(marca){
        case "hottoys":
            const figurasHotToys = require("./datos/figuras1.json");
            return figurasHotToys;
        case "bandai":
            const figurasBandai = require("./datos/figuras2.json");
            return figurasBandai; 
        case "starwars":
            const figurasStarWars = require("./datos/figuras3.json");
            return figurasStarWars;
        default:
            return null;
    }
}

module.exports= importar;