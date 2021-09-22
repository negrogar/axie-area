const path = require('path');
const fs = require('fs');

const axiesJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data.json'), 'utf-8'));
/* let dbDirectory = path.resolve(__dirname, '../database/usuarios.json') */

function Mamilones (par1,par2){
    let cartas = []
    for (let i = 0; i < 4; i++) {
        let cartaBuscada = axiesJson.find(axie => axie.name1 == par1[i]);
        cartas.push(cartaBuscada)
    }
    console.log(cartas);
    /* const cartaBuscada = axiesJson.find(axie => axie.name1 == par1.card1 ); */
    /* console.log(cartaBuscada); */
}

let enemy = "plant";
let axie = ["GOLDFISH","SPONGE","TEAL SHELL","SHOAL STAR",52]


Mamilones(axie,enemy)