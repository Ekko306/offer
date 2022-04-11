const {findRepeatNumber1, findRepeatNumber2, findRepeatNumber3} = require('./FindDuplication')

test('排序方法解决', ()=>{
    expect(findRepeatNumber1([2, 3, 1, 0, 2, 5, 3])).toBe(2)
})

test('哈希方法解决', ()=>{
    expect(findRepeatNumber2([2, 3, 1, 0, 2, 5, 3])).toBe(2)
})

test('根据下标解决', ()=>{
    expect(findRepeatNumber3([2, 3, 1, 0, 2, 5, 3])).toBe(2)
})
