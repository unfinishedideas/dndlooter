import * as lootTables from '../tables/lootTable.json';
import diceRoller from './diceRoller';

export default function getLoot(lootInput)
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
        let gems, artObjects, magicItems;
        // CR 0-4
        if (lootInput.cr === "0-4") {
            diceToRoll = {cp: "6d6x100", sp: "3d6x100", gp: "2d6x10"}
            if (d100_result >= 7 && d100_result <= 16) {
                gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
            } else if (d100_result >= 17 && d100_result <= 26) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            } else if (d100_result >= 27 && d100_result <= 36) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            } else if (d100_result >= 37 && d100_result <= 44) {
                gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,6).total, "A"
                );
            } else if (d100_result >= 45 && d100_result <= 52) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
                magicItems = determineMagicItems(
                    diceRoller(1,6).total, "A"
                );
            } else if (d100_result >= 53 && d100_result <= 60) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,6).total, "A"
                );
            } else if (d100_result >= 61 && d100_result <= 65) {
                gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "B"
                );
            } else if (d100_result >= 66 && d100_result <= 70) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "B"
                );
            } else if (d100_result >= 71 && d100_result <= 75) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "B"
                );
            } else if (d100_result >= 76 && d100_result <= 78) {
                gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "C"
                );
            } else if (d100_result >= 79 && d100_result <= 80) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "C"
                );
            } else if (d100_result >= 81 && d100_result <= 85) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "C"
                );
            } else if (d100_result >= 86 && d100_result <= 92) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "F"
                );
            } else if (d100_result >= 93 && d100_result <= 97) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
                magicItems = determineMagicItems(
                    diceRoller(1,4).total, "F"
                );
            } else if (d100_result >= 98 && d100_result <= 99) {
                artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
                magicItems = determineMagicItems(1, "G");
            } else if (d100_result === 100) {
                gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
                magicItems = determineMagicItems(1, "G");
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
        totals.treasureObjects = {gems: gems, artObjects: artObjects, magicItems: magicItems}
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

const determineTreasure = (number, value, type) =>
{
    let result = {totalNumber: number, totalValue: number*value, list: {}};
    let table;
    
    if (type === "gems") {
        if (value === 10) {
            table = lootTables.gems["10gp"];
        } else if (value === 50) {
            table = lootTables.gems["50gp"];
        } else if (value === 100) {
            table = lootTables.gems["100gp"];
        } else if (value === 500) {
            table = lootTables.gems["500gp"];
        } else if (value === 1000) {
            table = lootTables.gems["1000gp"];
        } else if (value === 5000) {
            table = lootTables.gems["5000gp"];
        } else {
            throw Error("determineTreasure: bad value for art_objects")
        }
    } else if (type === "art_objects") {
        if (value === 25) {
            table = lootTables.art_objects["25gp"];
        } else if (value === 75) {
            table = lootTables.art_objects["75gp"];
        } else if (value === 250) {
            table = lootTables.art_objects["250gp"];
        } else if (value === 750) {
            table = lootTables.art_objects["750gp"];
        } else if (value === 2500) {
            table = lootTables.art_objects["2500gp"];
        } else if (value === 7500) {
            table = lootTables.art_objects["7500gp"];
        } else {
            throw Error("determineTreasure: bad value for art_objects");
        }
    } else {
        throw Error("determineTreasure: Bad type");
    }

    for (let i = 0; i < number; i++) {
        const currentItem = table[Math.floor(Math.random()*table.length)];
        if (`${currentItem}` in result.list) {
            result.list[currentItem] += 1;
        } else {
            result.list[currentItem] = 1;
        }
    }

    return result;
}

const determineMagicItems = (timesToRollOnTable, tableLetter) => 
{
    return 'hi 3';
}
