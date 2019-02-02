import DiceBag from '../src/Dice'

it('rolls single die', () => {
    const diceBag = DiceBag();
    const diceResults = diceBag.rollDice(1, 4);
    expect(diceResults.total).toBeGreaterThanOrEqual(1);
    expect(diceResults.total).toBeLessThanOrEqual(4);
    expect(diceResults.numOfDice).toEqual(1);
});

it('rolls multiple dice', () => {
    const diceBag = DiceBag();
    const diceResults = diceBag.rollDice(2, 4, 1);
    expect(diceResults.total).toBeGreaterThanOrEqual(3);
    expect(diceResults.total).toBeLessThanOrEqual(9);
    expect(diceResults.numOfDice).toEqual(2);
});

it('rolls multiple dice with negative mod', () => {
    const diceBag = DiceBag();
    const diceResults = diceBag.rollDice(2, 4, -1);
    expect(diceResults.total).toBeGreaterThanOrEqual(1);
    expect(diceResults.total).toBeLessThanOrEqual(8);
    expect(diceResults.numOfDice).toEqual(2);
    expect(diceResults.adjustment).toEqual(-1);
    expect(diceResults.notation).toEqual("2d4-1")
});

it('rolls simple d4', () => {
    const diceBag = DiceBag();
    const result = diceBag.d4();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
});
it('rolls simple d6', () => {
    const diceBag = DiceBag();
    const result = diceBag.d6();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
});
it('rolls simple d8', () => {
    const diceBag = DiceBag();
    const result = diceBag.d8();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(8);
});
it('rolls simple d10', () => {
    const diceBag = DiceBag();
    const result = diceBag.d10();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});
it('rolls simple d12', () => {
    const diceBag = DiceBag();
    const result = diceBag.d12();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(12);
});
it('rolls simple d20', () => {
    const diceBag = DiceBag();
    const result = diceBag.d20();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(20);
});
it('rolls simple d100', () => {
    const diceBag = DiceBag();
    const result = diceBag.d100();
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
});