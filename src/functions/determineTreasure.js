import * as lootTables from '../tables/lootTable';

export default function determineTreasure(number, value, type)
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