import { createUid } from './uid';

describe('uid generator', () => {
  it('allows for prefixes', () => {
    const uid = createUid(
      () => 1,
      () => 10,
    );
    expect(uid('p')).toBe(`p-31l0-a-1-31l0`);
  });

  it('allows for non-prefixed uids', () => {
    const uid = createUid(
      () => 1,
      () => 10,
    );
    expect(uid()).toBe(`31l0-a-1-31l0`);
  });

  it('maintains an internal rollover', () => {
    const uid = createUid(
      () => 1,
      () => 10,
      2,
    );
    expect(uid()).toBe(`31l0-a-1-31l0`);
    expect(uid()).toBe(`31l0-a-2-31l0`);
    expect(uid()).toBe(`31l0-a-0-31l0`);
  });

  it('is collision resistant', () => {
    const uid = createUid();
    expect(uid()).not.toBe(uid());
  });
});
