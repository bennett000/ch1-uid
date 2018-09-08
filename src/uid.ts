export function createUid(
  random: () => number = Math.random.bind(Math),
  now: () => number = Date.now.bind(Date),
  rolloverMax = 100000,
  entropyMax = 100000
) {
  const id = Math.floor(random() * entropyMax).toString(32);
  let rollover = 0;

  return (prefix = '') => {
    const date = now().toString(32);
    const e = Math.floor(random() * entropyMax).toString(32);

    if (rollover >= rolloverMax) {
      rollover = 0;
    } else {
      rollover += 1;
    }

    return prefix
      ? `${prefix}-${id}-${date}-${rollover.toString(32)}-${e}`
      : `${id}-${date}-${rollover.toString(32)}-${e}`;
  };
}
