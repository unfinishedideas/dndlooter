import * as lootTables from '../tables/lootTable';

// functions
import { inRange } from './getLoot';
import diceRoller from './diceRoller';

export default function determineMagicItems(timesToRollOnTable, tableLetter)
{
    const d100_results = [];
    for (let i = 0; i< timesToRollOnTable; i++) {
        d100_results.push(diceRoller(1,100).total);
    }

    d100_results.forEach((result) => {
        console.log('rolled a ', result);
        if (inRange(result, 0, 50)) {
            console.log("1-50");
        } else if (inRange(result, 51, 100)) {
            console.log("51-100");
        }
    })

    return 'hi 3';
}
