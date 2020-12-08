//functions
import diceRoller from './diceRoller';
import determineTreasure from './determineTreasure';
import determineMagicItems from './determineMagicItems';
import getTableItem from './getTableItem';

export default function getLoot(lootInput)
{
    const d100_result = diceRoller(1, 100, 0).total;
    let diceToRoll;
    let totals = {};

    if (lootInput.type === 'individual') {
        if (lootInput.cr === "0-4") {
            determineMagicItems(3, "A");
            diceToRoll = getTableItem(d100_result, "0-4", "individualTreasure");
        } else if (lootInput.cr === "5-10") {
            diceToRoll = getTableItem(d100_result, "5-10", "individualTreasure");
        } else if (lootInput.cr === "11-16") {
            diceToRoll = getTableItem(d100_result, "11-16", "individualTreasure");        
        } else if (lootInput.cr === "17+") {
            diceToRoll = getTableItem(d100_result, "17+", "individualTreasure");
        } else {
            throw Error("invalid CR on individual tables");
        }

    } else if (lootInput.type === 'hoard') {
        let gems, artObjects, magicItems;

        if (lootInput.cr === "0-4") {
            diceToRoll = {cp: "6d6x100", sp: "3d6x100", gp: "2d6x10"}


            // if (inRange(d100_result, 7, 16)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
            // } else if (inRange(d100_result,17, 26)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            // } else if (inRange(d100_result, 27, 36)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            // } else if (inRange(d100_result, 37, 44)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,6).total, "A"
            //     );
            // } else if (inRange(d100_result, 45, 52)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,6).total, "A"
            //     );
            // } else if (inRange(d100_result, 53, 60)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,6).total, "A"
            //     );
            // } else if (inRange(d100_result, 61, 65)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "B"
            //     );
            // } else if (inRange(d100_result, 66, 70)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "B"
            //     );
            // } else if (inRange(d100_result, 71, 75)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "B"
            //     );
            // } else if (inRange(d100_result, 76, 78)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 10, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "C"
            //     );
            // } else if (inRange(d100_result, 79, 80)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "C"
            //     );
            // } else if (inRange(d100_result, 81, 85)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "C"
            //     );
            // } else if (inRange(d100_result, 86, 92)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "F"
            //     );
            // } else if (inRange(d100_result, 93, 97)) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            //     magicItems = determineMagicItems(
            //         diceRoller(1,4).total, "F"
            //     );
            // } else if (inRange(d100_result, 98, 99)) {
            //     artObjects = determineTreasure(diceRoller(2,4).total, 25, 'art_objects');
            //     magicItems = determineMagicItems(1, "G");
            // } else if (d100_result === 100) {
            //     gems = determineTreasure(diceRoller(2,6).total, 50, 'gems');
            //     magicItems = determineMagicItems(1, "G");
            // }


        } else if (lootInput.cr === "5-10") {
            diceToRoll = {cp: "2d6x100", sp: "2d6x1000", gp: "6d6x100", pp: "3d6x10"}

        } else if (lootInput.cr === "11-16") {
            diceToRoll = {gp: "4d6x1000", pp: "5d6x100"}

        } else if (lootInput.cr === "17+") {
            diceToRoll = {gp: "12d6x1000", pp: "8d6x1000"}

        } else {
            throw Error("invalid CR on hoard tables")
        }
        // Put the treasureObjects into totals
        totals.treasureObjects = { 
            gems: gems, 
            artObjects: artObjects, 
            magicItems: magicItems
        }
    }

    // Roll the amount of each type of coin
    for (const [type, value] of Object.entries(diceToRoll)) {
        let diceSplit = value.split('d');
        // currently only checks for x which is probably fine since I don't think any of the tables use other operators
        if (diceSplit[1].includes('x')) {
            diceSplit[1] = diceSplit[1].split("x");
            diceSplit = diceSplit.flat().concat("x");
        }
        let amount = diceRoller(parseInt(diceSplit[0]), parseInt(diceSplit[1]), parseInt(diceSplit[2]), diceSplit[3])
        totals[type] = amount.total;
    }

    return totals;
}

export function inRange(testNumber, lowNumber, highNumber = null) 
{
    if (highNumber === null) {
        if (testNumber >= lowNumber) {
            return true;
        }
    } else {
        if (testNumber >= lowNumber && testNumber <= highNumber) {
            return true;
        } else {
            return false;
        }
    }
}
