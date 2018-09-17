import { createUid } from './uid';

describe('uid generator', () => {
  it('allows for prefixes', () => {
    const uid = createUid(() => 1, () => 10);
    expect(uid('p')).toBe(`p-a-31l0-1-31l0`);
  });

  it('allows for non-prefixed uids', () => {
    const uid = createUid(() => 1, () => 10);
    expect(uid()).toBe(`uuid-a-31l0-1-31l0`);
  });

  it('maintains an internal rollover', () => {
    const uid = createUid(() => 1, () => 10, 2);
    expect(uid()).toBe(`uuid-a-31l0-1-31l0`);
    expect(uid()).toBe(`uuid-a-31l0-2-31l0`);
    expect(uid()).toBe(`uuid-a-31l0-0-31l0`);
  });

  it('is collision resistant', () => {
    const uid = createUid();
    expect(uid()).not.toBe(uid());
  });
});
