import {DiceBagWithSeed} from '../src/Dice'
it('rolls single die', () => {
    const diceBag = DiceBagWithSeed("MyRandomSeed");
    const diceResults = diceBag.rollDice(1, 4);
    expect(diceResults.total).toBeGreaterThanOrEqual(1);
    expect(diceResults.total).toBeLessThanOrEqual(4);
    expect(diceResults.numOfDice).toEqual(1);
});
it('seed is retrievable', () => {
    const diceBag = DiceBagWithSeed("MyRandomSeed");
    expect(diceBag.seed).toEqual("MyRandomSeed");
});