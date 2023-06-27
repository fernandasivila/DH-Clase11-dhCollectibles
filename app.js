const importar = require("./collectibles");
const hotToys = importar("hotToys");
const bandai = importar("bandai");
const starWars = importar("starWars")

const unifiedCollectibles = [...hotToys,...bandai,...starWars];

const collectibles = {
    figuras : unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach(figura => console.log(figura));
    },
    figuresByBrand: function(marca){
        let figuraDeMarca= this.figuras.filter(figura => figura.marca == marca);
        return figuraDeMarca;
    }
}

collectibles.listFigures();
console.log(collectibles.figuresByBrand("Bandai"));
