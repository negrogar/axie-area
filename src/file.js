const path = require('path');
const fs = require('fs');

const axiesJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data.json'), 'utf-8'));

var cartas = []
function addCards (par1){

    //FOR PARA AGREGAR LAS CARTAS AL ARRAY
    for (let i = 0; i < 4; i++) {
        let cartaBuscada = axiesJson.find(axie => axie.name1 == par1[i]);
        cartas.push(cartaBuscada)
    }
}


function dealDamage(cards,enemy){
/*     const plantReptileDusk = ["plant","reptile","dusk"]
    const aquaBirdDawn = ["aqua","bird","dawn"]
    const beastBugMech = ["beast","bug","mech"]
    if(par2 == "plant" || par2 == "reptile" || par2 == "dusk"){

    } */
    let cardsDamage = [];
    let card
    for (let i = 0; i < 4; i++) {
        if(cartas[i].class == "plant" || cartas[i].class == "reptile"){
            card = {
                name: cartas[i].name1,
                dmg: {
                    Aqua: cartas[i].dmg * 1.15,
                    Plant: cartas[i].dmg * 1,
                    Beast: cartas[i].dmg * 0.85
                }
            } 
            cardsDamage.push(card)
        }else if (cartas[i].class == "Aquatic" || cartas[i].class == "Bird"){
            card = {
                name: cartas[i].name1,
                dmg: {
                    Aqua: cartas[i].dmg * 1,
                    Plant: cartas[i].dmg * 0.85,
                    Beast: cartas[i].dmg * 1.15
                }
            } 
            cardsDamage.push(card)
        }else if (cartas[i].class == "Beast" || cartas[i].class == "Bug"){
                card = {
                    name: cartas[i].name1,
                    dmg: {
                        Aqua: cartas[i].dmg * 0.85,
                        Plant: cartas[i].dmg * 1.15,
                        Beast: cartas[i].dmg * 1
                    }
                } 
                cardsDamage.push(card)
        }
    }
            console.log(cardsDamage);
}

let enemy = "plant";
let axie = ["GOLDFISH","WALL GECKO, ESCAPED GECKO","TEAL SHELL","RONIN",52]


addCards(axie)
dealDamage(cartas)