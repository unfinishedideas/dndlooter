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
            diceToRoll = {cp: "6d6x100", sp: "3d6x100", gp: "2d6x10"}
            if (d100_result >= 7 && d100_result <= 16) {

            } else if (d100_result >= 17 && d100_result <= 26) {
                
            } else if (d100_result >= 27 && d100_result <= 36) {
            
            } else if (d100_result >= 37 && d100_result <= 44) {
            
            } else if (d100_result >= 45 && d100_result <= 52) {
            
            } else if (d100_result >= 53 && d100_result <= 60) {
            
            } else if (d100_result >= 61 && d100_result <= 65) {
            
            } else if (d100_result >= 66 && d100_result <= 70) {
            
            } else if (d100_result >= 71 && d100_result <= 75) {
            
            } else if (d100_result >= 76 && d100_result <= 78) {
            
            } else if (d100_result >= 79 && d100_result <= 80) {
            
            } else if (d100_result >= 81 && d100_result <= 85) {
            
            } else if (d100_result >= 86 && d100_result <= 92) {
            
            } else if (d100_result >= 93 && d100_result <= 97) {
            
            } else if (d100_result >= 98 && d100_result <= 99) {
            
            } else if (d100_result === 100) {

            }
        // CR 5-10
        } else if (lootInput.cr === "5-10") {
            diceToRoll = {cp: "2d6x100", sp: "2d6x1000", gp: "6d6x100", pp: "3d6x10"}
        // CR 11-16
        } else if (lootInput.cr === "11-16") {
            diceToRoll = {gp: "4d6x1000", pp: "5d6x100"}
        // CR 17+
        } else if (lootInput.cr === "17+") {
            diceToRoll = {gp: "12d6x1000", pp: "8d6x1000"}
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

const determineGems = (order) =>
{
    return 'hi 1';
}

const determineArtObjects = (order) =>
{
    return 'hi 2';
}

const determineMagicItems = (order) => 
{
    return 'hi 3';
}
