import DiceBag from '../src/Dice'
import seedrandom from 'seedrandom'
it('dice using same seed produce predictable results when making multiple calls', () => {
    const diceBag = DiceBag(seedrandom("StringRandomSeed1!"));
    const diceResults1 = diceBag.rollDice(1, 8);
    const diceResults2 = diceBag.rollDice(1, 8);
    const diceResults3 = diceBag.rollDice(1, 8);
    const diceResults4 = diceBag.rollDice(1, 8);
    expect(diceResults1.total).toEqual(5);
    expect(diceResults2.total).toEqual(7);
    expect(diceResults3.total).toEqual(2);
    expect(diceResults4.total).toEqual(3);
});
it('dice using same seed produce predictable results when making single call with multiple dice', () => {
    const diceBag = DiceBag(seedrandom("StringRandomSeed1!"));
    const diceResults1 = diceBag.rollDice(8, 8);
    expect(diceResults1.individualResults[0].outcome).toEqual(5);
    expect(diceResults1.individualResults[1].outcome).toEqual(7);
    expect(diceResults1.individualResults[2].outcome).toEqual(2);
    expect(diceResults1.individualResults[3].outcome).toEqual(3);
    expect(diceResults1.individualResults[4].outcome).toEqual(5);
    expect(diceResults1.individualResults[5].outcome).toEqual(8);
    expect(diceResults1.individualResults[6].outcome).toEqual(1);
    expect(diceResults1.individualResults[7].outcome).toEqual(1);
});
it('dice rolled as a group still follow same seeded pattern as those rolled individually', () => {
    const diceBag = DiceBag(seedrandom("StringRandomSeed1!"));
    const diceResults1 = diceBag.rollDice(1, 8);
    const diceResults2 = diceBag.rollDice(1, 8);
    const diceResults3 = diceBag.rollDice(1, 8);
    const diceResults4 = diceBag.rollDice(1, 8);

    const diceBag2 = DiceBag(seedrandom("StringRandomSeed1!"))
    const diceBag2Results = diceBag2.rollDice(4, 8);
    expect(diceResults1.total).toEqual(diceBag2Results.individualResults[0].outcome);
    expect(diceResults2.total).toEqual(diceBag2Results.individualResults[1].outcome);
    expect(diceResults3.total).toEqual(diceBag2Results.individualResults[2].outcome);
    expect(diceResults4.total).toEqual(diceBag2Results.individualResults[3].outcome);
});

it('Math.random can be passed in as generator', () => {
    const diceBag = DiceBag(Math.random);
    const diceResults1 = diceBag.rollDice(1, 8);

    expect(diceResults1.individualResults[0].outcome).toBeGreaterThanOrEqual(1);
    expect(diceResults1.individualResults[0].outcome).toBeLessThanOrEqual(8);
    expect(diceResults1.total).toBeGreaterThanOrEqual(1);
    expect(diceResults1.total).toBeLessThanOrEqual(8);
});
it('toString of Dice roll with adjustment prints appropriately', () => {
    const diceBag = DiceBag(seedrandom("StringRandomSeed1!"));
    const result = diceBag.rollDice(4, 8, 1);
    expect(result.toString()).toBe("4d8+1=[5,7,2,3]+1=18")
})