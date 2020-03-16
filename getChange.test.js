var assert = chai.assert; 

describe('getChange', () => {
  it('getChange(1,1) should equal [] - an empty array', () => {
    assert.deepEqual(getChange(1,1), []);
  });
});