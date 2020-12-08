const diceRoller = (numOfDice, numOfSides, modifier = null, operation = null) => {
    let inputCheck = true;
    const acceptableOperations = ["x", "+", "-", "/"]
    if (!Number.isInteger(numOfDice)  || numOfDice <= 0 ) {inputCheck = false;}
    if (!Number.isInteger(numOfSides) || numOfSides <= 0) {inputCheck = false;}
    if (operation !== null && !acceptableOperations.includes(operation)) {inputCheck = false;}
    if (!inputCheck) {return rejectObject}

    let results = [];
    
    for(let i = 0; i < numOfDice; i+= 1) {
        const min = 1;
        const max = numOfSides;
        let roll = Math.floor(Math.random() * (max - min + 1) + min);
        results.push(roll);
    }

    let total = results.reduce((total, result) => total + result);

    if (operation === "x") {
        total *= modifier;
    } else if (operation === "+") {
        total -= modifier;
    } else if (operation === "-") {
        total -= modifier;
    }
    
    if (modifier && operation) {
        return {string: `${numOfDice}d${numOfSides}${operation}${modifier}`, results: results, total: total};
    } else {
        return {string: `${numOfDice}d${numOfSides}`, results: results, total: total};
    }
};

export default diceRoller;

const rejectObject = {string: 'Invalid input',results: [],total: 0}