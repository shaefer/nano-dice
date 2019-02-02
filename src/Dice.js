import seedrandom from 'seedrandom';

const Sum = (arr) => arr.reduce((acc, nv) => acc + nv);
const adjustmentAsString = (a) => { return a > 0 ? `+${a}` : a === 0 ? '' : a; };

const DieRoll = (sides, rollResult) => {
    return {
        sides,
        outcome: rollResult
    };
};

const DiceRolls = (individualResults, adjustment, notation, randomGenerator) => {
    const total = Sum(individualResults.map(x => x.outcome)) + adjustment;
    return {
        notation,
        numOfDice: individualResults.length,
        individualResults,
        adjustment,
        total,
        randomGenerator,
        toString: () => {
            return `${notation}=[${individualResults.map(x => x.outcome)}]${adjustmentAsString(adjustment)}=${total}`;
        }
    };
};

export const rollDice = (numOfDice, sidesOfDice, adjustment = 0, randomGenerator = seedrandom()) => {
    const diceResults = [];
    for (let i = 0; i < numOfDice; i++) {
        diceResults.push(DieRoll(sidesOfDice, Math.floor(randomGenerator() * sidesOfDice) + 1));
    }
    const notation = `${numOfDice}d${sidesOfDice}${adjustmentAsString(adjustment)}`;
    return DiceRolls(diceResults, adjustment, notation, randomGenerator);
};

export const d4 = (plus = 0) => {
    return rollDice(1, 4, plus).total;
};
export const d6 = (plus = 0) => {
    return rollDice(1, 6, plus).total;
};
export const d8 = (plus = 0) => {
    return rollDice(1, 8, plus).total;
};
export const d10 = (plus = 0) => {
    return rollDice(1, 10, plus).total;
};
export const d12 = (plus = 0) => {
    return rollDice(1, 12, plus).total;
};
export const d20 = (plus = 0) => {
    return rollDice(1, 20, plus).total;
};
export const d100 = (plus = 0) => {
    return rollDice(1, 100, plus).total;
};

export const DiceBag = (randomGenerator = seedrandom()) => {
    return {
        randomGenerator,
        rollDice: (numOfDice, sidesOfDice, adjustment, generator = randomGenerator) => {
            return rollDice(numOfDice, sidesOfDice, adjustment, generator);
        },
        d4,
        d6,
        d8,
        d10,
        d12,
        d20,
        d100
    };
};

export const DiceBagWithSeed = (seed) => {
    const diceBag = DiceBag(seedrandom(seed));
    diceBag.seed = seed;
    return diceBag;
};

export default DiceBag;
