import * as lootTables from '../tables/lootTable';

// functions
import { inRange } from './getLoot';

export default function compareTableRange(testNumber, crRange, type)
{
    let table;
    if (type === "individualTreasure") {
        table = lootTables.individualTreasure.CR[crRange]; 
    } else if (type==="hoard") {
        table = lootTables.hoard.CR[crRange];
    } else {
        throw Error("compareTableRange: type must be 'individual' or 'hoard'!");
    }

    let ranges = [];
    let solitaryNums = [];
    let loot = {};
    
    // parse the ranges from the loot table into Ints and put them in an array. Solitary numbers get their own array so they play nice.
    for (let key in table) {
        if (key.includes('-')) {
            let splitStr = key.split('-');
            splitStr[0] = parseInt(splitStr[0]);
            splitStr[1] = parseInt(splitStr[1]);
            ranges.push(splitStr);
        } else {
            solitaryNums.push(parseInt(key));
        }
    }
    solitaryNums.forEach((number) => {
        ranges.push(number);
    })


    // Get the entry and assign it to the loot object
    ranges.forEach((currentRange) => {
        if(Array.isArray(currentRange)) {
            if (inRange(testNumber, currentRange[0], currentRange[1])) {
                let key = `${currentRange[0]}-${currentRange[1]}`;
                Object.assign(loot, table[key])
            }
        } else {
            if (inRange(testNumber, currentRange)) {
                let key = `${currentRange}`;
                Object.assign(loot, table[key])
            }
        }
    })

    return loot;
}