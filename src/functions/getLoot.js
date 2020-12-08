import * as lootTables from '../tables/lootTable.json';
import diceRoller from './diceRoller';

export default function getLoot(lootInput) 
{
    const currencyResults = calculateCurrency(lootInput);
    return currencyResults;
}

const calculateCurrency = (lootInput) =>
{
    const d100_result = diceRoller(1, 100, 0).total;
    let diceToRoll;
    let totals = {};

    if (lootInput.type === 'individual') {
        // CR 0-4
        if (lootInput.cr === "0-4") {
            if (d100_result >= 0 && d100_result <= 30) {
                diceToRoll = lootTables.individualTreasure.CR["0-4"]["1-30"]
            } else if (d100_result >= 31 && d100_result <= 60) {
                diceToRoll = lootTables.individualTreasure.CR["0-4"]["31-60"]
            } else if (d100_result >= 61 && d100_result <= 70) {
                diceToRoll = lootTables.individualTreasure.CR["0-4"]["61-70"]
            } else if (d100_result >= 71 && d100_result <= 95) {
                diceToRoll = lootTables.individualTreasure.CR["0-4"]["71-95"]
            } else if (d100_result >= 96) {
                diceToRoll = lootTables.individualTreasure.CR["0-4"]["96-100"]
            }
        // CR 5-10
        } else if (lootInput.cr === "5-10") {
            if (d100_result >= 0 && d100_result <= 30) {
                diceToRoll = lootTables.individualTreasure.CR["5-10"]["1-30"]
            } else if (d100_result >= 31 && d100_result <= 60) {
                diceToRoll = lootTables.individualTreasure.CR["5-10"]["31-60"]
            } else if (d100_result >= 61 && d100_result <= 70) {
                diceToRoll = lootTables.individualTreasure.CR["5-10"]["61-70"]
            } else if (d100_result >= 71 && d100_result <= 95) {
                diceToRoll = lootTables.individualTreasure.CR["5-10"]["71-95"]
            } else if (d100_result >= 96){
                diceToRoll = lootTables.individualTreasure.CR["5-10"]["96-100"]
            }
        // CR 11-16
        } else if (lootInput.cr === "11-16") {
            if (d100_result >= 0 && d100_result <= 20) {
                diceToRoll = lootTables.individualTreasure.CR["11-16"]["0-20"]
            } else if (d100_result >= 21 && d100_result <= 35) {
                diceToRoll = lootTables.individualTreasure.CR["11-16"]["21-35"]
            } else if (d100_result >= 36 && d100_result <= 75) {
                diceToRoll = lootTables.individualTreasure.CR["11-16"]["36-75"]
            } else if (d100_result >= 76) {
                diceToRoll = lootTables.individualTreasure.CR["11-16"]["76-100"]
            }   
        // CR 17+
        } else if (lootInput.cr === "17+") {
            if (d100_result >= 0 && d100_result <= 15) {
                diceToRoll = lootTables.individualTreasure.CR["17+"]["0-15"]
            } else if (d100_result >= 16 && d100_result <= 55) {
                diceToRoll = lootTables.individualTreasure.CR["17+"]["16-55"]
            } else if (d100_result >= 56){
                diceToRoll = lootTables.individualTreasure.CR["17+"]["56-100"]
            }
        } else {
            console.error('invalid CR on individual tables');
        }
    // Hoard loot
    } else if (lootInput.type === 'hoard') {
        // CR 0-4
        if (lootInput.cr === "0-4") {
         
        // CR 5-10
        } else if (lootInput.cr === "5-10") {
          
        // CR 11-16
        } else if (lootInput.cr === "11-16") {
         
        // CR 17+
        } else if (lootInput.cr === "17+") {
        
        } else {
            console.error('invalid CR on individual tables');
        }
    }

    // Roll the amount of each type of coin
    for (const [type, value] of Object.entries(diceToRoll)) {
        let diceSplit = value.split('d');
        if (diceSplit[1].includes('x')) {
            diceSplit[1] = diceSplit[1].split("x");
            diceSplit = diceSplit.flat().concat("x");
        }
        let amount = diceRoller(parseInt(diceSplit[0]), parseInt(diceSplit[1]), parseInt(diceSplit[2]), diceSplit[3])
        totals[type] = amount.total;
    }

    return totals;
}

const determineMagicItems = (order) => 
{
    return 'hi'
}