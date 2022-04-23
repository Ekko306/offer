const {findRepeatNumber1, findRepeatNumber2, findRepeatNumber3} = require('./FindDuplication')

test('排序方法解决', ()=>{
    expect(findRepeatNumber1([2, 3, 1, 0, 2, 5, 3])).toBe(2)
    expect(findRepeatNumber1([0, 1, 2, 3, 4, 5])).toBe(undefined)  // 是不是更好的程序 要定义没找到的字段 比如null/undefined 思路完整
    expect(findRepeatNumber1([])).toBe(undefined)
    expect(findRepeatNumber1([1, 100, 1000])).toBe(undefined)
    expect(findRepeatNumber1([1, 100, 1000, 1000])).toBe(1000)    // 数组不符合要求也行😂 ❌
})

test('哈希方法解决', ()=>{
    expect(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3])).toBe(2)
    expect(findRepeatNumber2([0, 1, 2, 3, 4, 5])).toBe(null) // 找不到又变成null了
    expect(findRepeatNumber2([])).toBe(null)
    expect(findRepeatNumber2([1, 100, 1000, 1000])).toBe(1000)    // 数组不符合要求行 ❌
})

test('根据下标解决', ()=>{
    expect(findRepeatNumber3([2, 3, 1, 0, 2, 5, 3])).toBe(2)
    expect(findRepeatNumber3([0, 1, 2, 3, 4, 5])).toBe(-1)  // 找不到又变成-1了
    expect(findRepeatNumber3([])).toBe(-1)
    expect(findRepeatNumber3([1, 100, 1000, 1000])).toBe(1000)    // 数组不符合就不行了哈哈
})
