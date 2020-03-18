var assert = chai.assert; 

describe('getChange', () => {
  it('getChange(1,1) should equal [] - an empty array', () => {
    assert.deepEqual(getChange(1,1), []);
  });
  
  it('getChange(215, 300) should equal [50, 20, 10, 5]', () => {
    assert.deepEqual(getChange(215, 300), [50, 20, 10, 5]);
  });

  it('getChange(486, 600) should equal [100, 10, 2, 2]', () => {
    assert.deepEqual(getChange(486, 600), [100, 10, 2, 2]);
  });
  
  it('getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]', function() {
    let result = getChange(12, 400);
    let expected = [200, 100, 50, 20, 10, 5, 2, 1];
    assert.deepEqual(result, expected);
  });
});