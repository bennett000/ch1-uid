# CH1 UID

[![CircleCI](https://circleci.com/gh/bennett000/ch1-uid.svg?style=svg)](https://circleci.com/gh/bennett000/ch1-uid)

_This is not well maintained_

## Installation

`yarn add @ch1/uid`

## Usage

```ts
import { createUid } from '@ch1/uid';

const uid = createUid();

const someId = uid();
const someOtherId = uid();
const someOtherIdStartingWithFoo = uid('Foo');
```

Ids have the following formats:

`prefix-id-date-rollover-entropy`

or

`id-date-rollover-entropy`

- Where all numbers (id, date, rollover, and entropy) are in base 32.
- Where id is internally generated at the `createUid` call
- Where dates are timestamps in milliseconds
- Where rollover is an internal numeric counter that increments to a maximum and then "rolls over"
- Where entropy is random data added to the end

## Customizing

There are options!

```ts
const uid = createUid(
  random: () => number, // random number generator, ideally returns `0 <= x < 1`
  date: () => number,   // timestamp in ms
  rolloverMax: number,  // internal rollover counter
  entropyMax: number,   // multiplier of `random()` for ends of uids
);

const someId = uid();
```

## License

[LGPL](./LICENSE 'Lesser GNU Public License')
