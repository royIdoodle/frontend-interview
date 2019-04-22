import case1 from '../src/case1';
import case2 from '../src/case2';
import case3 from '../src/case3';

describe('test', function () {
  it('case1', function () {
    expect(case1).toBe([3, 1, 2]);
  });
  
  it('case2', async function () {
    const tasks = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.reject(),
      Promise.resolve(4)
    ];
    const result = await case2(tasks);
    expect(result).toBe([1, 2, null, 4]);
  });
  
  it('case3', function () {
    const arr = [1, [2, [3, [4]]]];
    expect(case3(arr, 2)).toBe([1, 2, 3, [4]])
  });
});