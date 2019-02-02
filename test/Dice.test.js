import {rollDice, d4, d6, d8, d10, d12, d20, d100} from '../src/Dice'
it('rolls single die', () => {
    const diceResults = rollDice(1, 4);
    expect(diceResults.total).toBeGreaterThanOrEqual(1);
    expect(diceResults.total).toBeLessThanOrEqual(4);
    expect(diceResults.numOfDice).toEqual(1);
});

it('rolls multiple dice', () => {
    const diceResults = rollDice(2, 4, 1);
    expect(diceResults.total).toBeGreaterThanOrEqual(3);
    expect(diceResults.total).toBeLessThanOrEqual(9);
    expect(diceResults.numOfDice).toEqual(2);
});

it('rolls multiple dice with negative mod', () => {
    const diceResults = rollDice(2, 4, -1);
    expect(diceResults.total).toBeGreaterThanOrEqual(1);
    expect(diceResults.total).toBeLessThanOrEqual(8);
    expect(diceResults.numOfDice).toEqual(2);
    expect(diceResults.adjustment).toEqual(-1);
    expect(diceResults.notation).toEqual("2d4-1")
});

it('rolls simple d4', () => {
    const result = d4();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
});
it('rolls simple d6', () => {
    const result = d6();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
});
it('rolls simple d8', () => {
    const result = d8();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(8);
});
it('rolls simple d10', () => {
    const result = d10();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});
it('rolls simple d12', () => {
    const result = d12();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(12);
});
it('rolls simple d20', () => {
    const result = d20();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(20);
});
it('rolls simple d100', () => {
    const result = d100();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
});