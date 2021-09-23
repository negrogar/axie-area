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

function fullDamage(cards,axie){
    var cardsDamage = [];
    var cardsDamageCombo = [];
    let card
    let cardCombo
    for (let i = 0; i < 4; i++) {
        if(cards[i].class == "Plant" || cards[i].class == "Reptile"){
            if(axie[5] == cards[i].class){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1.15 * 1.1,
                        Plant: cards[i].dmg * 1 * 1.1,
                        Beast: cards[i].dmg * 0.85 * 1.1
                    }
                } 
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500)
                    }
                } 
            }else if (axie[5] == "Dusk"){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1.15 * 1.075,
                        Plant: cards[i].dmg * 1 * 1.075,
                        Beast: cards[i].dmg * 0.85 * 1.075
                    }
                } 
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.075 + (cards[i].dmg * axie[4] / 500)
                    }
                }
            }else{
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1.15,
                        Plant: cards[i].dmg * 1,
                        Beast: cards[i].dmg * 0.85
                    }
                }
                    cardCombo = {
                        name: cards[i].name1,
                        dmg: {
                            Aqua: cards[i].dmg * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500),
                            Plant: cards[i].dmg * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                            Beast: cards[i].dmg * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500)
                        }
                    }  
            }
        }else if (cards[i].class == "Aquatic" || cards[i].class == "Bird"){
            if(axie[5] == cards[i].class){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1 * 1.1,
                        Plant: cards[i].dmg * 0.85 * 1.1,
                        Beast: cards[i].dmg * 1.15 * 1.1
                    }
                }
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500)
                    }
                }    
            }else if (axie[5] == "Dawn"){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1 * 1.075,
                        Plant: cards[i].dmg * 0.85 * 1.075,
                        Beast: cards[i].dmg * 1.15 * 1.075
                    }
                } 
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 0.85 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 1.15 * 1.075 + (cards[i].dmg * axie[4] / 500)
                    }
                }
            }else{
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 1,
                        Plant: cards[i].dmg * 0.85,
                        Beast: cards[i].dmg * 1.15
                    }
                }
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500)
                    }
                }  
            }
        }else if (cards[i].class == "Beast" || cards[i].class == "Bug"){
            if(axie[5] == cards[i].class){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 0.85 * 1.1,
                        Plant: cards[i].dmg * 1.15 * 1.1,
                        Beast: cards[i].dmg * 1 * 1.1
                    }
                }
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500)
                    }
                } 
            }else if(axie[5] == "Mech"){
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 0.85 * 1.075,
                        Plant: cards[i].dmg * 1.15 * 1.075,
                        Beast: cards[i].dmg * 1 * 1.075
                    }
                }
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.075 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.075 + (cards[i].dmg * axie[4] / 500)
                    }
                } 
            }else{
                card = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg * 0.85,
                        Plant: cards[i].dmg * 1.15,
                        Beast: cards[i].dmg * 1
                    }
                }
                cardCombo = {
                    name: cards[i].name1,
                    dmg: {
                        Aqua: cards[i].dmg  * 1.15 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Plant: cards[i].dmg  * 1 * 1.1 + (cards[i].dmg * axie[4] / 500),
                        Beast: cards[i].dmg  * 0.85 * 1.1 + (cards[i].dmg * axie[4] / 500)
                    }
                } 
            }
        }
        cardsDamage.push(card)
        cardsDamageCombo.push(cardCombo)
    }
    /* console.log(cardsDamage);
    console.log(cardsDamageCombo); */
}




function dealDamage(combo,stats){
    var fullDmg = 0; 
    fullCombo = [];
    for (let i = 0; i < combo.length; i++) {
        let cartaBuscada = axiesJson.find(fullCombo => fullCombo.name1 == combo[i]);
        fullCombo.push(cartaBuscada)
        if (combo.length >= 2) {
            if(fullCombo[i].class == stats[2]){
                if(fullCombo[i].class == "Plant" || fullCombo[i].class == "Reptile"){
                    if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 + (fullCombo[i].dmg * stats[0] / 500))
                    }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                    }else{
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                    }
                }else if(fullCombo[i].class == "Aquatic" || fullCombo[i].class == "Bird"){
                    if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                    }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10  + (fullCombo[i].dmg * stats[0] / 500))
                    }else{
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                    }
                }else if(fullCombo[i].class == "Beast" || fullCombo[i].class == "Bug"){
                    if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                    }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                    }else{
                        fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 + (fullCombo[i].dmg * stats[0] / 500))
                    }
                }
            }else{
                if(stats[2] == "Dusk" || stats[2] == "Reptile" || stats[2] == "Plant"){
                    if(stats[2] == "Dusk"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        } 
                    }else{
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        } 
                    }
                }else if (stats[2] == "Dawn" || stats[2] == "Aquatic" || stats[2] == "Bird"){
                    if(stats[2] == "Dawn"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075  + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }else{
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }
                }else if(stats[2] == "Mech" || stats[2] == "Beast" || stats[2] == "Bug"){
                    if(stats[2] == "Mech"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }else{
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }
                }
            }
        }else{
                if(fullCombo[i].class == stats[2]){
                    if(fullCombo[i].class == "Plant" || fullCombo[i].class == "Reptile"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }else if(fullCombo[i].class == "Aquatic" || fullCombo[i].class == "Bird"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10  + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }else if(fullCombo[i].class == "Beast" || fullCombo[i].class == "Bug"){
                        if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                        }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                        }else{
                            fullDmg = fullDmg + (fullCombo[i].dmg  * 1.10 + (fullCombo[i].dmg * stats[0] / 500))
                        }
                    }
                }else{
                    if(stats[2] == "Dusk" || stats[2] == "Reptile" || stats[2] == "Plant"){
                        if(stats[2] == "Dusk"){
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            } 
                        }else{
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            } 
                        }
                    }else if (stats[2] == "Dawn" || stats[2] == "Aquatic" || stats[2] == "Bird"){
                        if(stats[2] == "Dawn"){
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075  + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }
                        }else{
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }
                        }
                    }else if(stats[2] == "Mech" || stats[2] == "Beast" || stats[2] == "Bug"){
                        if(stats[2] == "Mech"){
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg  * 1.075 + (fullCombo[i].dmg * stats[0] / 500))
                            }
                        }else{
                            if(stats[1] ==  "Plant" || stats[1] ==  "Reptile" || stats[1] ==  "Dusk"){
                                fullDmg = fullDmg + (fullCombo[i].dmg * 1.15 + (fullCombo[i].dmg * stats[0] / 500))
                            }else if (stats[1] ==  "Aquatic" || stats[1] ==  "Bird" || stats[1] ==  "Dawn") {
                                fullDmg = fullDmg + (fullCombo[i].dmg * 0.85 + (fullCombo[i].dmg * stats[0] / 500))
                            }else{
                                fullDmg = fullDmg + (fullCombo[i].dmg + (fullCombo[i].dmg * stats[0] / 500))
                            }
                        }
                    }
            }
        }
    console.log(fullDmg);
    /* console.log(fullCombo); */
}
}

let axie = ["TURNIP","BLUE MOON","HERO","POST FIGHT",35, "Dawn"]
let combo = ["BLUE MOON", "HERO", "POST FIGHT"]
let stats = [35,"Beast","Reptile"]   

addCards(axie)
fullDamage(cartas,axie)
dealDamage(combo,stats)
/* console.log(cartas); */