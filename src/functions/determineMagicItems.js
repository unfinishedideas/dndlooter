import * as magicItemsTable from '../tables/magicItemsTable';

// functions
import { inRange } from './getLoot';
import diceRoller from './diceRoller';

export default function determineMagicItems(timesToRollOnTable, tableLetter)
{
    const d100_results = [];
    const table = magicItemsTable.items[tableLetter];
    let ranges = [];
    let solitaryNums = [];
    let loot = [];

    // get d100 results
    for (let i = 0; i< timesToRollOnTable; i++) {
        d100_results.push(diceRoller(1,100).total);
    }
    
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

    // for each d100 roll determine what the item is on the table and put that string into the loot array
    d100_results.forEach((result) => {
        ranges.forEach((currentRange) => {
            if(Array.isArray(currentRange)) {
                if (inRange(result, currentRange[0], currentRange[1])) {
                    let key = `${currentRange[0]}-${currentRange[1]}`;
                    loot.push(table[key])
                }
            } else {
                if (inRange(result, currentRange)) {
                    let key = `${currentRange}`;
                    loot.push(table[key])
                }
            }
        })
    })

    return loot;
}
