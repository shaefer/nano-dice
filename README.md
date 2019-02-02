# Nano Dice

[![Build Status](https://travis-ci.com/shaefer/nano-dice.svg?branch=master)](https://travis-ci.com/shaefer/nano-dice)
[![Coverage Status](https://coveralls.io/repos/github/shaefer/nano-dice/badge.svg?branch=master)](https://coveralls.io/github/shaefer/nano-dice?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Nano-Dice** ✨

Lightweight Polyhedral Dice Roller

# Features

* **rollDice** - simple function to roll dice and return results = rollDice(numOfDice, numOfSides, adjustment)
* **DiceBag** - a small wrapper for you rollDice function along with a few convenience methods

# Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run coveralls` - Generage coverage report and post to Coveralls site.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License

MIT © Daniel Shaefer
